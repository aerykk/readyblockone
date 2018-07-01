import * as DB from '../../../../DB'

const React = require('react')

export default {
    name: "Ethereum",
    header: {
        logo: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/logos/ethereum.png"
    },
    highlight: {
        stats: {
            released: "2015",
            ledger: "blockchain",
            architecture: "ethereum",
            type: "currency"
        }
    },
    tokens: {
        items: DB.tokens.find({
            'symbol': { '$in' : ['btc', 'eth', 'xrp', 'bch', 'ltc'] }
        })
    },
    history: {
        content: <p className="iq-mb-30"></p>,
        timeline: {
            items: []
        }
    },
    quickLinks: {
        social: {
            content: <p></p>
        },
        forums: {
            items: DB.sites.find({
                'id': { '$in': ['rcryptocurrency', 'rethereum', 'bitcointalk'] }
            })
        },
        other: {
            items: DB.sites.find({
                'id': { '$in': ['cryptocurrencycalendar', 'cryptocompare', 'coinmastery'] }
            })
        }
    },
    notifications: {
        content: <p>If there's big news or problems with Ethereum, we'll let you know here first.</p>,
        alerts: {
            items: [
                {
                    date: "June 2, 2018",
                    type: "Exchange Notice",
                    content: <p>Both Binance and Bittrex are experimenting with their own USD pair (not based on Tether)</p>
                }
            ]
        },
        warnings: {
            items: [
                {
                    date: "May 10, 2018",
                    type: "Scam Notice",
                    content: <p>Giza ICO</p>
                }
            ]
        }
    },
    compare: {
        content: <p>No cryptocurrencies are exactly alike. Each have pros and cons. We'll touch on some of those, but ultimately you'll have to do your own research to figure out which one is for you. But don't worry, we'll be here to guide you along with way.</p>,
        items: DB.tokens.find({
            'symbol': { '$in': ['eth', 'btc', 'iota'] }
        })
    },
    media: {
        content: <p>Ethereum and blockchain can be confusing at times. We promise these videos will make it clearer.</p>,
        items: [
            DB.videos.findOne({ 'id': 'gavinworldcomputer' }),
            {
                id: 'decentralizedisrupt17',
                video: "https://www.youtube.com/watch?v=WSN5BaCzsbo",
                thumbnail: "http://i3.ytimg.com/vi/WSN5BaCzsbo/hqdefault.jpg",
                title: "Decentralizing Everything",
                subtitle: "By Vitalik Buterin",
                content: <p>AngelList's Naval Ravikant brings Ethereum's Vitalik Buterin onstage to explain what it is and why it's useful.</p>
            },
            DB.videos.findOne({ 'id': 'bettinablockchain' }),
            DB.videos.findOne({ 'id': 'charlesdecentralized' })
        ]
    },
    // https://www.reddit.com/r/ethereum/comments/7d9wvd/best_books_on_ethereum/
    education: {
        content: <p>We've compiled a list of the best resources to learn Ethereum. You should always reference <a href="https://www.reddit.com/r/ethereum/comments/4ws9um/rethereum_rules_and_getting_started_guide/" target="_blank"><strong>the official /r/Ethereum Rules and Getting Started Guide</strong></a></p>,
        books: DB.books.find({
            'id': { '$in': ['mb', 'tsotb'] }
        })
    },
    exchanges: {
        content: <p>So where can we buy &amp; sell Ethereum? Which is most popular? Which is safest?</p>,
        spotlight: DB.exchanges.find({
            'title': { '$in': ['Binance', 'Bittrex'] }
        }),
        items: DB.exchanges.data
    },
    softwareWallets: {
        content: <div>
            <p>What are the best software wallets to store Ethereum?</p>
            <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
        </div>,
        items: DB.softwareWallets.find({
            'company': { '$in': ['Jaxx', 'Exodus'] }
        })
    },
    hardwareWallets: {
        content: <div>
            <p>What are the best hardware wallets to store Ethereum?</p>
            <p><strong>Hardware Wallet:</strong> a device dedicated to storing cryptocurrency (usually pretty safe).</p>
        </div>,
        items: DB.hardwareWallets.find({
            'company': { '$in': ['Trezor', 'Ledger'] }
        })
    },
    faq: {
        content: <p></p>,
        items: [
            {
                id: "howfast",
                collapsed: false,
                question: "How fast is Ethereum?",
                answer: <p>It depends on the day, but on average it's currently 7 transactions per second. This is considered quite low. In fact there is often thousands of pending transactions.</p>
            },
            {
                id: "created",
                collapsed: true,
                question: "Who created Ethereum?",
                answer: <p></p>
            }
        ]
    }

}