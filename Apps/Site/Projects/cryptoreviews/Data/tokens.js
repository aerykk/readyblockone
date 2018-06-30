const React = require('react')

export default [
    {
        rank: "1",
        symbol: "btc",
        name: "Bitcoin",
        link: "https://readyblock.one/review/btc",
        notes: [
            {
                checked: true,
                text: "Proven Secure (Oldest)"
            },
            {
                checked: true,
                text: "Core Team"
            },
            {
                checked: false,
                text: "Visa-level Scale"
            },
            {
                checked: false,
                text: "Smart Contracts"
            },
            {
                checked: false,
                text: "Expensive Transactions (relatively)"
            }
        ]
    },
    {
        rank: "2",
        symbol: "eth",
        name: "Ethereum"
    },
    {
        rank: "3",
        symbol: "xrp",
        name: "Ripple"
    },
    {
        rank: "4",
        symbol: "bch",
        name: "Bitcoin Cash",
        link: "https://readyblock.one/review/bch",
        notes: [
            {
                checked: true,
                text: "Theoretically Scaleable"
            },
            {
                checked: true,
                text: "Cheap Transactions"
            },
            {
                checked: false,
                text: "Core Team"
            }
        ]
    },
    {
        rank: "5",
        symbol: "ltc",
        name: "Litecoin",
        link: "https://readyblock.one/review/ltc",
        notes: [
        ]
    },
    {
        rank: "6",
        symbol: 'iota',
        name: 'IOTA',
        link: "https://readyblock.one/review/iota",
        notes: [
            {
                checked: true,
                text: "Visa-level Scale (theoretically)"
            },
            {
                checked: true,
                text: "Free Transactions"
            }
        ]
    },
]