export const INITIAL_COLLECTIONS = {
    books: {
        id: 1,
        title: "books",
        imageUrl: "/img/01.jpg",
        linkUrl: '/books',
        collections: {
        dogme: {
                id: 1,
                title: "dogme",
                imageUrl: "/img/01.jpg",
                linkUrl: '/dogme',
                selection: "books",
                items: [{
                        id: 11,
                        name: " tafsir",
                        imageUrl: "/img/01.jpg",
                        tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
                        desc: "tab_ charh , mot ayat / resumé7a",
                        edition: "qq hose edition",
                        price: "11",

                    },
                    {
                        id: 12,
                        name: " tafsir2",
                        imageUrl: "/img/02.jpg",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
                        edition: "qq hose edition",
                        price: "21",

                    },
                    {
                        id: 13,
                        name: "tafsir 4",
                        imageUrl: "/img/03.jpg",
                        tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq edigtion 2",
                        price: "21",

                    }
                ]
            },
            sagesse: {
                id: 2,
                title: "sagesse",
                imageUrl: "/img/02.jpg",
                linkUrl: '/sagesse',
                selection: "books",
                items: [{
                        id: 21,
                        name: "hikma1",
                        tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
                        imageUrl: "/img/03.jpg",

                        desc: "tab_ charh , mot ayat / resumé",
                        edition: "qq chose 1",
                        price: "21",

                    },
                    {
                        id: 22,
                        name: "hikma 2",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        imageUrl: "/img/04.jpg",

                        desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
                        edition: "qq chose 2",
                        price: "21",

                    },
                    {
                        id: 23,
                        name: "hikma3",
                        tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
                        imageUrl: "/img/05.jpg",

                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq chose 3",
                        price: "21",

                    },

                    {
                        id: 24,
                        name: "hikma4",
                        tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
                        imageUrl: "/img/01.jpg",

                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq chose 3",
                        price: "21",

                    }
                ]
            },
            sociologie: {
                id: 3,
                title: "sociologie",
                imageUrl: "/img/03.jpg",
                linkUrl: '/sociologie',
                selection: "books",
                items: [{
                        id: 31,
                        name: "sociol 1",
                        tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
                        imageUrl: "/img/02.jpg",
                        desc: "tab_ charh , mot ayat / resumé7a",
                        edition: "qq chose 3",
                        price: "23",
                    },
                    {
                        id: 32,
                        name: "socio 2",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        imageUrl: "/img/02.jpg",
                        desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
                        edition: "qq chose 4",
                        price: "21",
                    },
                    {
                        id: 33,
                        name: "socio 3",
                        tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
                        imageUrl: "/img/02.jpg",
                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq chose 3",
                        price: "30",
                    }
                ]
            }
        }
    },
    products: {
        id: 2,
        title: "products",
        imageUrl: "/img/04.jpg",
        linkUrl: '/products',
        collections: {
            market: {
                id: 4,
                title: "market",
                imageUrl: "/img/04.jpg",
                linkUrl: '/market',
                selection: "products",
                items: [{
                        id: 41,
                        name: "Hopera 1",
                        tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
                        imageUrl: "/img/03.jpg",
                        desc: "tab_ charh , mot ayat / resumé7a",
                        edition: "qq chose 4",
                        price: "21",
                    },
                    {
                        id: 42,
                        name: "café 2",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        imageUrl: "/img/04.jpg",
                        desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
                        edition: "qq chose 5",
                        price: "21",
                    },
                    {
                        id: 43,
                        name: "cacao 3",
                        tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
                        imageUrl: "/img/05.jpg",
                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq chose 4",
                        price: "21",
                    }
                ]

            },

            ludique: {
                id: 5,
                title: "ludique",
                imageUrl: "/img/05.jpg",
                linkUrl: '/ludique',
                selection: "products",
                items: [{
                        id: 51,
                        name: " diy Om",
                        tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
                        desc: "tab_ charh , mot ayat / resumé7a",
                        edition: "qq chose 1",
                        imageUrl: "/img/02.jpg",

                        price: "21",
                    },
                    {
                        id: 52,
                        name: " diy isma",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
                        edition: "qq chose 2",
                        imageUrl: "/img/02.jpg",
                        price: "21",
                    },
                    {
                        id: 53,
                        name: " diy ordre",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq chose 3",
                        imageUrl: "/img/02.jpg",
                        price: "21",
                    },
                    {
                        id: 54,
                        name: "diy isma2",
                        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        edition: "qq chose 3 ",
                        imageUrl: "/img/02.jpg",
                        price: "21",
                    },
                    {
                        id: 55,
                        name: " diy isma3",
                        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                        imageUrl: "/img/02.jpg",
                        edition: "qq chose 4",
                        price: "21",
                    }
                ]
            }
        }
    }
}
