export default {
    name: 'test',
    title: 'Test',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'imageMini',
            title: 'Image mini',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'parties',
            title: 'Parties',
            type: 'object',
            fields: [
                {
                    name: 'partie1',
                    title: 'Partie1',
                    type: 'object',
                    options: {
                        collapsible: true,
                    },
                    fields: [
                        {
                            name: 'name_part',
                            title: 'Name_part',
                            type: 'string',
                        },
                        {
                            name: 'vues',
                            title: 'Vues',
                            type: 'object',
                            fields: [
                                {
                                    name: 'imageV1',
                                    title: 'ImageV1',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                },
                                {
                                    name: 'imageV2',
                                    title: 'ImageV2',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                },
                                {
                                    name: 'imageV3',
                                    title: 'ImageV3',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                        {
                            name: 'price',
                            title: 'Price',
                            type: 'array',
                            of: [{ type: 'number' }],
                        },
                        {
                            name: 'details',
                            title: 'Details',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }
                    ],
                },
                {
                    name: 'partie2',
                    title: 'Partie2',
                    type: 'object',
                    options: {
                        collapsible: true,
                    },
                    fields: [
                        {
                            name: 'name_part',
                            title: 'Name_part',
                            type: 'string',
                        },
                        {
                            name: 'vues',
                            title: 'Vues',
                            type: 'object',
                            fields: [
                                {
                                    name: 'imageV1',
                                    title: 'ImageV1',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                },
                                {
                                    name: 'imageV2',
                                    title: 'ImageV2',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                },
                                {
                                    name: 'imageV3',
                                    title: 'ImageV3',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                        {
                            name: 'price',
                            title: 'Price',
                            type: 'array',
                            of: [{ type: 'number' }],
                        },
                        {
                            name: 'details',
                            title: 'Details',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }
                    ],
                },
                {
                    name: 'partie3',
                    title: 'Partie3',
                    type: 'object',
                    options: {
                        collapsible: true,
                    },
                    fields: [
                        {
                            name: 'name_part',
                            title: 'Name_part',
                            type: 'string',
                        },
                        {
                            name: 'vues',
                            title: 'Vues',
                            type: 'object',
                            fields: [
                                {
                                    name: 'imageV1',
                                    title: 'ImageV1',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                },
                                {
                                    name: 'imageV2',
                                    title: 'ImageV2',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                },
                                {
                                    name: 'imageV3',
                                    title: 'ImageV3',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                    options: {
                                        hotspot: true,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                        {
                            name: 'price',
                            title: 'Price',
                            type: 'array',
                            of: [{ type: 'number' }],
                        },
                        {
                            name: 'details',
                            title: 'Details',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }
                    ],
                },
            ]
        },
    ]
}