import * as DB from '../../../../DB'

export default {
    name: "Bitcoin",
    header: {
        logo: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/logos/bitcoin.png"
    },
    highlight: {
        stats: {
            released: "2009",
            ledger: "blockchain",
            architecture: "bitcoin",
            type: "currency"
        }
    },
    tokens: {
        items: DB.tokens.find({
            'symbol': { '$in' : ['btc', 'eth', 'xrp', 'bch', 'ltc'] }
        })
    },
    history: {
        content: <p className="iq-mb-30">Bitcoin is the original cryptocurrency. It's the king daddy of crypto. It tooks the learnings of the cypher punk era in the 90s and built on it, combining blockchain, consensus and proof of work to create a safe to use currency with no double spending. Bitcoin was created in 2009 by Satoshi Nakamoto. Nobody knows who it was, if it was a group or an individual.</p>,
        timeline: {
            items: []
        }
    },
    quickLinks: {
        social: {
            content: <p>Bitcoin has <strong>no official website or social networks</strong>, as it's ownerless. It has a core development team, but no organization management. Bitcoin.com is an unofficial portal by Roger Ver.</p>
        },
        forums: {
            items: [
                {
                    link: "https://readyblock.one/go/rcryptocurrency",
                    name: "Reddit r/cryptocurrency",
                    rating: "7/10",
                    tags: [
                        "Community",
                        "Market Info"
                    ],
                    notes: <p></p>
                },
                {
                    link: "https://readyblock.one/go/rbitcoinmarkets",
                    name: "Reddit r/rbitcoinmarkets",
                    rating: "9/10",
                    tags: [
                        "Community",
                        "Market Info"
                    ],
                    notes: <p></p>
                },
                {
                    link: "https://readyblock.one/go/bitcointalk",
                    name: "BitcoinTalk Forum",
                    rating: "10/10",
                    tags: [
                        "SA",
                        "Communities"
                    ],
                    notes: <p>Every token has its own forum topic.</p>
                },
            ]
        },
        other: {
            items: [
                {
                    link: "https://readyblock.one/go/cryptocurrencycalendar",
                    name: "Cryptocurrency Calendar",
                    rating: "9/10",
                    tags: [
                        "Market Info"
                    ],
                    notes: <p>Good for finding news before it hits reddit</p>
                },
                {
                    link: "https://readyblock.one/go/cryptocompare",
                    name: "CryptoCompare",
                    rating: "6/10",
                    tags: [
                        "Market Info",
                        "Tools"
                    ],
                    notes: <p>Their mining profit calculator is incorrect (doesn't consider increasing difficulty). They also exaggerate Japanese trading volume, as they're missing many exchanges.</p>
                },
                {
                    link: "https://readyblock.one/go/coinmastery",
                    name: "Coin Mastery",
                    rating: "10/10",
                    tags: [
                        "FA",
                        "SA",
                        "TA"
                    ],
                    notes: <p>Fundament, sentiment &amp; technical analysis</p>
                }
            ]
        }
    },
    notifications: {
        content: <p>If there's big news or problems with Bitcoin, we'll let you know here first.</p>,
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
            'symbol': { '$in': ['btc', 'iota', 'bch'] }
        })
    },
    media: {
        content: <p>Bitcoin and blockchain can be confusing at times. We promise these videos will make it clearer.</p>,
        items: DB.videos.find({
            'id': { '$in': ['bettinablockchain', 'charlesdecentralized'] }
        })
    },
    education: {
        content: <p>We've compiled a list of the only the top rated books on Bitcoin.</p>,
        books: [
            {
                link: "https://readyblock.one/go/book/mb",
                thumbnail: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/mb.png",
                subtitle: "By: Andreas Antonopoulos",
                title: "Mastering Bitcoin",
                content: <p dir="ltr" style={{ height: '290px' }}><span>This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>,
                price: "$22.50",
                rating: 5,
                tags: [
                    {
                        title: "Blockchain",
                        link: "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain"
                    }
                ]
            },
            {
                link: "https://readyblock.one/go/book/btfom",
                thumbnail: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/btfom.png",
                subtitle: "By: Dominic Frisby",
                title: "Bitcoin The Future of Money",
                content: <p dir="ltr" style={{ height: '290px' }}>Another key book on the Bitcoin space from the Author Dominic Frisby. The book tries to unravel the mystery of who exactly is Satoshi Nakamoto. Printed before Craig Wrights attempt at usurping the title - Dominic Frisby searches the length and breadth of the bitcoin world from meet ups to interviews with key people in the industry. As he unravels and explains how the industry works he moves through various participants giving the arguments for and against them being Satoshi Nakamoto - through insightful detective work and even looking at linguistic analysis. A thrilling read all round that gets to grips with Bitcoin's genesis and gently explains to the reader its potential and history.</p>,
                price: "$18.99",
                rating: 4,
                tags: [
                    {
                        title: "Blockchain",
                        link: "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain"
                    }
                ]
            },
            {
                link: "https://readyblock.one/go/book/tbb",
                thumbnail: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/tbb.png",
                subtitle: "By: Benjamin Guttmann",
                title: "The Bitcoin Bible",
                content: <p dir="ltr" style={{ height: '290px' }}>This is a sort of almanac of bitcoin stories with various angles and short but information-rich stories and snippets - various contributing authors BitcoinMagasine.com and Motherboard.com give the book its style and flavor. The book covers key people - the nature of VC funding in the industry - key partnerships that industry players have made - a look at mining chips - the wealth distribution effect in bitcoin and more. Again a clear style means the book is a pick up - read a chapter and learn something new to flesh out your understanding of another small corner of the bitcoin ecosystem. Well worth sticking on your shelf.</p>,
                price: "$33.90",
                rating: 3.5,
                tags: [
                    {
                        title: "Blockchain",
                        link: "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain"
                    }
                ]
            },
            {
                link: "https://readyblock.one/go/book/tsotb",
                thumbnail: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/tsotb.png",
                subtitle: "By: Roger Wattenhofer",
                title: "The Science of the Blockchain",
                content: <p dir="ltr" style={{ height: '290px' }}>If you want to learn the <strong>mathematical foundations about the blockchain</strong> then the must read is: The Science of the Blockchain. But be warned: that book is very mathematical. It uses heavy mathematical notation and it does not explain too much in plain language.</p>,
                price: "$19.90",
                rating: 3.5,
                tags: [
                    {
                        title: "Blockchain",
                        link: "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain"
                    },
                    {
                        title: "Technical",
                        link: "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain+technical"
                    }
                ]
            }
        ]
    },
    exchanges: {
        content: <p>So where can we buy &amp; sell Bitcoin? Which is most popular? Which is safest?</p>,
        spotlight: DB.exchanges.find({
            'title': { '$in': ['Binance', 'Bittrex'] }
        }),
        items: DB.exchanges.data
    },
    softwareWallets: {
        content: <div>
            <p>What are the best software wallets to store Bitcoin?</p>
            <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
        </div>,
        items: DB.softwareWallets.find({
            'company': { '$in': ['Jaxx', 'Exodus'] }
        })
    },
    hardwareWallets: {
        content: <div>
            <p>What are the best hardware wallets to store Bitcoin?</p>
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
                question: "How fast is Bitcoin?",
                answer: <p>It depends on the day, but on average it's currently 7 transactions per second. This is considered quite low. In fact there is often thousands of pending transactions.</p>
            },
            {
                id: "forks",
                collapsed: true,
                question: "What's up with all the forks?",
                answer: <p>A fork is when an individual or organization starts going a different direction than the original chain (usually due to different source code). This happened with Bitcoin a lot due to improvements wanting to be made that the Bitcoin core team either didn't get to yet or do not support. Since Bitcoin is the dominate cryptocurrency that most people hold, it makes for a good chain to fork. And since most people are holding not selling, it leads to low liquidity, which is sometimes preceived as strength (people not wanting to sell). This leads to a higher market cap. Thus, some organizations are looking at it as quick way to make money.</p>
            },
            {
                id: "die",
                collapsed: true,
                question: "Can Bitcoin die?",
                answer: <p>It's possible in theory, but very very unlikely for Bitcoin to die at this point. The worst thing that could happen is the source code is hacked, but miners would quickly react and ignore the corrupt source code. Since it's deployed to thousands of computers world wide, it's unlikely every single one will stop mining for the foreseeable future. Even if it fades away, there will always be somebody willing to bet on a comeback.</p>
            },
            {
                id: "maximalist",
                collapsed: true,
                question: "What is a Bitcoin maximalist?",
                answer: <p>A maximalist is somebody who believes Bitcoin is the only solution needed. They are typically early adopters and see blockchain's major use case as a currency, and Bitcoin as the defacto implementation.</p>
            },
            {
                id: "created",
                collapsed: true,
                question: "Who created Bitcoin?",
                answer: <p>Nobody knows for sure. Some believe it was the government (NSA), or a large corporation (Softbank). A common guess is Hal Finney, the first user aside from Satoshi, who lived in the same town as a Satoshi Nakamoto; Unforunately Hal passed away in 2014. Since then, Craig Wright has attempted to claim the fame, but others such as Vitalik Buterin have been quick to point of the unlikelihood of that being true.</p>
            }
        ]
    }

}