import * as DB from '../../../../DB'

const React = require('react')

export default {
    name: "Aion",
    header: {
        logo: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/logos/aion.png"
    },
    highlight: {
        stats: {
            released: "2018",
            ledger: "blockchain",
            architecture: "aion",
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
                'id': { '$in': ['rcryptocurrency', 'bitcointalk'] }
            })
        },
        other: {
            items: DB.sites.find({
                'id': { '$in': ['cryptocurrencycalendar', 'cryptocompare'] }
            })
        }
    },
    notifications: {
        content: <p>If there's big news or problems with Aion, we'll let you know here first.</p>,
        alerts: {
            items: [
            ]
        },
        warnings: {
            items: [
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
        content: <p>Aion and blockchain can be confusing at times. We promise these videos will make it clearer.</p>,
        items: [
            DB.videos.findOne({ 'id': 'bettinablockchain' }),
            DB.videos.findOne({ 'id': 'charlesdecentralized' })
        ]
    },
    education: {
        content: <p>We've compiled a list of the only the top rated books on Aion.</p>,
        books: DB.books.find({
            'id': { '$in': [] }
        })
    },
    exchanges: {
        content: <p>So where can we buy &amp; sell Aion? Which is most popular? Which is safest?</p>,
        spotlight: DB.exchanges.find({
            'title': { '$in': ['Binance', 'Bittrex'] }
        }),
        items: DB.exchanges.data
    },
    softwareWallets: {
        content: <div>
            <p>What are the best software wallets to store Aion?</p>
            <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
        </div>,
        items: DB.softwareWallets.find({
            'company': { '$in': ['Exodus'] }
        })
    },
    hardwareWallets: {
        content: <div>
            <p>What are the best hardware wallets to store Aion?</p>
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
                question: "How fast is Aion?",
                answer: <p>It depends on the day, but on average it's currently 7 transactions per second. This is considered quite low. In fact there is often thousands of pending transactions.</p>
            },
            {
                id: "created",
                collapsed: true,
                question: "Who created Aion?",
                answer: <p></p>
            }
        ]
    }

}