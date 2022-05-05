import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

const TestDetails = ({ product, products }) => {

    // Destructuration de l'objet reçu
    const { imageMini, name, parties } = product;
    // Initialisation d'un tableau vide pour les index
    let arrayIndexs = [];
    // Parcourt du nombre de parties du meuble et push d'un 0 dans le tableau pour chaque partie
    for (const [key, value] of Object.entries(parties)) {
        arrayIndexs.push(0)
    }
    // Initialisation des différents useState
    const [indexs, setIndexs] = useState(arrayIndexs);
    const [indexMax, setIndexMax] = useState([]); // Tableau d'index max pour l'affichage des parties
    const [partie, setPartie] = useState([]); // Tableau pour stocker les composants Partie
    const [config, setConfig] = useState([]); // Tableau pour stocker les composants Config
    const [view, setView] = useState("V1"); // useState pour changer la vue du meuble

    // const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    // const handleBuyNow = () => {
    //     onAdd(product, qty);
    //     setShowCart(true);
    // }

    // Fonction pour changer une partie d'un meuble (appelée au clique sur une flèche)
    // Récupération de value qui est droite ou gauche (selon la flèche) + x 
    const changePart = (value, x) => {

        // Récupération du tableau d'index dans un nouveau tableau pour modification des données
        let newArray = [...indexs];

        if (value === "right") { // Si flèche de droite cliquée
            if (indexs[x] === indexMax[x]) { // Si l'index de la partie est égale à l'index maximum alors retour de l'index à 0
                newArray[x] = 0;
                setIndexs(newArray); // Et set des nouveaux index avec le tableau
            } else { // Sinon incrémentation normale de l'index
                newArray[x] = indexs[x] + 1;
                setIndexs(newArray); // Et set des nouveaux index avec le tableau
            }
        } else if (value === "left") { // Si flèche de gauche cliquée
            if (indexs[x] === 0) { // Si l'index de la partie est égale à l'index minimum alors retour à l'index max
                newArray[x] = indexMax[x];
                setIndexs(newArray); // Et set des nouveaux index avec le tableau
            } else { // Sinon décrémentation normale de l'index
                newArray[x] = newArray[x] - 1;
                setIndexs(newArray); // Et set des nouveaux index avec le tableau
            }
        }
    }

    // Fonction pour changer la vue du meuble (appelée au clique sur une mini image) et récupération de l'index (grâce au parcourt des minis images)
    const changeView = (i) => {
        setView(`V${i}`); // Set de la vue avec concaténation de l'index
    }

    // useEffect appelé au chargement de la page et à chaque changement de indexs et view
    useEffect(() => {
        // Remise à zéro de tous les tableaux
        setPartie([]);
        setConfig([]);
        setIndexMax([]);
        let x = 0;
        // Initialisation de x à 0 et parcourt de l'objet parties pour avoir accès à chaque partie
        for (const [key, value] of Object.entries(parties)) {
            // Parcourt des différentes vues dans l'objet partie)
            for (const [keyVue, valueVue] of Object.entries(value.vues)) {
                if (keyVue === `image${view}`) { // Si le nom de l'objet est égal à "image" + concaténation de view
                    // Passage de tous les props au composant Partie (valueVue qui est l'objet, le tableau d'indexs, x qui s'incrémente à chaque passage et key obligatoire)
                    // Et stockage dans la constante
                    const partie = <Partie partie={valueVue} indexs={indexs} x={x} key={key} />;
                    setPartie(prev => { return [...prev, partie] }); // Set du composant dans le tableau en prenant en compte les anciens (prev)
                }
            }
            // Passage de tous les props au composant Config (value qui est l'objet, le tableau d'indexs, la fonction changePart pour le changement de partie,
            // le x qui s'incrémente à chaque passage et key obligatoire).
            // Et stockage dans la constante
            const config = <Config partie={value} indexs={indexs} changePart={changePart} x={x} key={key} />;
            setConfig(prev => { return [...prev, config] }); // Set du composant dans le tableau en prenant en compte les anciens (prev)
            setIndexMax(prev => { return [...prev, value.name.length - 1] }); // Set des différents indexMax basé (selon les parties)
            x++; // Incrémentation du x
        }
    }, [indexs, view])

    return (
        <div>
            <div className="image-container">
                <h2>{name}</h2>
                {partie}
                <div>
                    {config}
                </div>
                <div className="small-images-container">
                    {imageMini && imageMini.map((image, i) => // Parcourt du tableau des miniatures et appel du composant en lui passant l'image, la fonction
                        // pour changer la vue du meuble, l'index + 1 et la key obligatoire pour composant unique
                        <ImagesMini image={image} changeView={changeView} i={i + 1} key={image._key} />
                    )}
                </div>
            </div>
        </div>
    )
}

// Composant Partie pour l'affichage des différentes parties du meuble (images)
const Partie = ({ partie, indexs, x }) => {

    // Récupération des props et parcourt du tableau de partie pour définir quelle vue est choisie et passage des différents props pour l'affichage de l'image
    return <>
        {partie.map((image, i) => (
            indexs[x] === i &&
            <div id={`Layer${x + 1}`} key={image._key} style={{ position: 'absolute', left: '137px', top: '500px', width: '136px', height: '132px', zIndex: x + 1 }}>
                <img src={urlFor(image)} className="" />
            </div>
        ))}
    </>
}

// Composant Config pour l'affichage des flèches pour changer les parties, affichage du nom, du prix et du détail
const Config = ({ partie, indexs, changePart, x }) => {

    // Récupération des props et affichage direct des différentes valeurs avec la fonction changePart appelée au clique sur une flèche pour changer une partie
    return <>
        <button type="button" onClick={() => changePart("left", x)} ><AiOutlineArrowLeft /></button>
        {partie.name_part}
        <button type="button" onClick={() => changePart("right", x)} ><AiOutlineArrowRight /></button>
        <p>{partie.name[indexs[x]]}</p>
        <p>{partie.price[indexs[x]]}€</p>
        <p>{partie.details[indexs[x]]}</p>
    </>
}

// Composant ImagesMini pour l'affichage des miniatures (pour les différentes vues)
const ImagesMini = ({ image, changeView, i }) => {
    // Récupération des props et passage à l'élément img avec la fonction changeView appelée au clique sur une miniature pour changer la vue
    return <img className='small-image2' src={urlFor(image)} onClick={() => changeView(i)} />
}

export const getStaticPaths = async () => {
    const query = `*[_type == "test"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "test" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "test"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { product, products }
    }
}

export default TestDetails