import * as DB from '../../../../DB'

const Framework = require('../../../../../../../../Framework')
const { React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString } = Framework

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
        items: [
            // DB.tokens.find({ 'symbol': 'btc' }).data,
            // DB.tokens.find({ 'symbol': 'eth' }).data,
            // DB.tokens.find({ 'symbol': 'xrp' }).data
        ]
    },
    social: {
        content: <p>Bitcoin has <strong>no official website or social networks</strong>, as it's ownerless. It has a core development team, but no organization management. Bitcoin.com is an unofficial portal by Roger Ver.</p>
    },
    history: {
        content: <p className="iq-mb-30">Bitcoin is the original cryptocurrency. It's the king daddy of crypto. It tooks the learnings of the cypher punk era in the 90s and built on it, combining blockchain, consensus and proof of work to create a safe to use currency with no double spending. Bitcoin was created in 2009 by Satoshi Nakamoto. Nobody knows who it was, if it was a group or an individual.</p>,
        timeline: {
            items: [
                {
                    heading: "",
                    content: <p></p>
                }
            ]
        }
    },
    quickLinks: {
        social: {

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
        items: [
            {
                symbol: 'btc',
                name: 'Bitcoin',
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
            {
                symbol: 'bch',
                name: 'Bitcoin Cash',
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
            }
        ]
    },
    media: {
        content: <p>Bitcoin and blockchain can be confusing at times. We promise these videos will make it clearer.</p>,
        items: [
            {
                video: "https://www.youtube.com/watch?v=RplnSVTzvnU",
                thumbnail: "http://i3.ytimg.com/vi/RplnSVTzvnU/hqdefault.jpg",
                title: "How the blockchain will radically transform the economy",
                subtitle: "By Bettina Warburg",
                content: <p>Say hello to the decentralized economy -- the blockchain is about to change everything. In this lucid explainer of the complex (and confusing) technology, Bettina Warburg describes how the blockchain will eliminate the need for centralized institutions like banks or governments to facilitate trade, evolving age-old models of commerce and finance into something far more interesting: a distributed, transparent, autonomous system for exchanging value.</p>
            },
            {
                video: "https://www.youtube.com/watch?v=97ufCT6lQcY",
                thumbnail: "http://i3.ytimg.com/vi/97ufCT6lQcY/hqdefault.jpg",
                title: "The future will be decentralized",
                subtitle: "By Charles Hoskinson",
                content: <p>This talk was given at a local TEDx event, produced independently of the TED Conferences. Tech entrepreneur and mathematician Charles Hoskinson says Bitcoin-related technology is about to revolutionise property rights, banking, remote education, private law and crowd-funding for the developing world.</p>
            }
        ]
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
        spotlight: [
            {
                title: "Binance",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/binance.svg",
                link: "https://readyblock.one/go/binance",
                content: <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>,
                domain: "www.binance.com",
            },
            {
                title: "Bittrex",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/bittrex.svg",
                link: "https://readyblock.one/go/bittrex",
                content: <p>Bittrex was the most popular exchange (by volume) until Binance dethrowned them in late 2017. They still have one of the widest selection of altcoins to trade.</p>,
                domain: "www.bittrex.com",
            }
        ],
        items: [
            {
                title: "Binance",
                rank: "1",
                link: "https://readyblock.one/go/binance",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/binance.svg",
                age: "2017",
                hacks: "0",
                safety: "9/10",
                notes: <p>Moved from Hong Kong to Singapore to Malta. Relies on USDT (shady). Still relatively new and susceptible to hacks.</p>,
            },
            {
                title: "Gemini",
                rank: "2",
                link: "https://readyblock.one/go/gemini",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/gemini.svg",
                age: "2016",
                hacks: "0",
                safety: "10/10",
                notes: <p>Based in USA (pretty safe). Works directly with SEC (good). Holds own USD (good). No major problems yet. Has gone offline randomly during high activity.</p>,
            },
            {
                title: "Kraken",
                rank: "3",
                link: "https://readyblock.one/go/kraken",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/kraken.svg",
                age: "2014",
                hacks: "0",
                safety: "10/10",
                notes: <p>Based in USA (pretty safe). Holds own USD (good). No major problems yet. Focus on security. Goes offline often. Really slow trading. Really slow support.</p>,
            },
            {
                title: "Coinbase (GDAX)",
                rank: "3",
                link: "https://readyblock.one/go/coinbase",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/coinbase.svg",
                age: "2014",
                hacks: "0",
                safety: "10/10",
                notes: <p>Based in USA (pretty safe). Works directly with SEC (good). Holds own USD (good). Keeps going offline during bitcoin crashes but not surges (suggesting manipulation). Typically more expensive during booms.</p>,
            },
            {
                title: "Bitfinex",
                rank: "4",
                link: "https://readyblock.one/go/bitfinex",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/bitfinex.svg",
                age: "2014",
                hacks: "1",
                safety: "6/10",
                notes: <p>Based in ???. Never sure where they are as they keep relocating. Internal connection to Tether (USDT) with potentially shady behaviour.</p>,
            },
            {
                title: "Bitstamp",
                rank: "5",
                link: "https://readyblock.one/go/bitstamp",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/bitstamp.svg",
                age: "2014",
                hacks: "1",
                safety: "8/10",
                notes: <p>Based in UK (pretty safe). Holds own USD (good). Focus on security. Hot wallet hacked once.</p>,
            },
            {
                title: "Bitflyer",
                rank: "6",
                link: "https://readyblock.one/go/bitflyer",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/bitflyer.svg",
                age: "2016",
                hacks: "0",
                safety: "8/10",
                notes: <p>Based in Japan. Accepts international customers. Licensed by government.</p>,
            },
            {
                title: "Bitthumb",
                rank: "7",
                link: "https://readyblock.one/go/bitthumb",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/bitthumb.svg",
                age: "2016",
                hacks: "0",
                safety: "8/10",
                notes: <p>Based in South Korea. Accepts international. Not much known yet. Has been audited by gov (good).</p>,
            },
            {
                title: "Kucoin",
                rank: "8",
                link: "https://readyblock.one/go/kucoin",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/kucoin.svg",
                age: "2016",
                hacks: "0",
                safety: "8/10",
                notes: <p>Very new, susceptible to hacks. Offers rev share. Trading engine is a bit slow during high load.</p>,
            },
            {
                title: "Huobi",
                rank: "9",
                link: "https://readyblock.one/go/huobi",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/huobi.svg",
                age: "2016",
                hacks: "0",
                safety: "8/10",
                notes: <p>Based in Singapore. Very new, susceptible to hacks. Offers rev share. Good volume, unique tokens. Being chinese focused is concerning.</p>,
            },
            {
                title: "IDEX",
                rank: "10",
                link: "https://readyblock.one/go/idex",
                thumbnail: "/Apps/Site/Core/Assets/Exchanges/idex.svg",
                age: "2017",
                hacks: "0",
                safety: "10/10",
                notes: <p>Decentralized exchange (DEX). Generally safe from sweeping hacks, but potientally susceptible to phishing hacks so be careful clicking links.</p>,
            },
            {
                title: "EtherDelta",
                age: "2016",
                hacks: "2",
                safety: "0/10",
                notes: <p><strong>Do not use.</strong> It was originally created by a single developer, Zach, and sold to new management. They did not update it for a while, were hacked, ignored victims and did not reimburse. They then proceeded to do an ICO and disappear for months.</p>,
            }
        ]
    },
    softwareWallets: {
        content: <div>
            <p>What are the best software wallets to store Bitcoin?</p>
            <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
        </div>,
        items: [
            {
                title: "Jaxx",
                company: "Jaxx",
                link: "https://readyblock.one/go/jaxx",
                thumbnail: "/Apps/Site/Core/Assets/Wallets/jaxx.png",
                domain: "jaxx.io",
                content: <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
            },
            {
                title: "Exodus",
                company: "Exodus",
                link: "https://readyblock.one/go/exodus",
                thumbnail: "/Apps/Site/Core/Assets/Wallets/exodus.png",
                domain: "exodus.io",
                content: <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
            },
        ]
    },
    hardwareWallets: {
        content: <div>
            <p>What are the best hardware wallets to store Bitcoin?</p>
            <p><strong>Hardware Wallet:</strong> a device dedicated to storing cryptocurrency (usually pretty safe).</p>
        </div>,
        items: [
            {
                title: "Trezor",
                company: "Trezor",
                link: "https://readyblock.one/go/trezor",
                thumbnail: "/Apps/Site/Core/Assets/Wallets/trezor.png",
                domain: "trezor.io",
                content: <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
            },
            {
                title: "Ledger Nano S",
                company: "Ledger",
                link: "https://readyblock.one/go/ledger",
                thumbnail: "/Apps/Site/Core/Assets/Wallets/ledger.png",
                domain: "ledgerwallet.com",
                content: <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
            }
        ]
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
                id: "forks",
                collapsed: true,
                question: "Can Bitcoin die?",
                answer: <p>It's possible in theory, but very very unlikely for Bitcoin to die at this point. The worst thing that could happen is the source code is hacked, but miners would quickly react and ignore the corrupt source code. Since it's deployed to thousands of computers world wide, it's unlikely every single one will stop mining for the foreseeable future. Even if it fades away, there will always be somebody willing to bet on a comeback.</p>
            },
            {
                id: "forks",
                collapsed: true,
                question: "What is a Bitcoin maximalist?",
                answer: <p>A maximalist is somebody who believes Bitcoin is the only solution needed. They are typically early adopters and see blockchain's major use case as a currency, and Bitcoin as the defacto implementation.</p>
            },
            {
                id: "forks",
                collapsed: true,
                question: "Who created Bitcoin?",
                answer: <p>Nobody knows for sure. Some believe it was the government (NSA), or a large corporation (Softbank). A common guess is Hal Finney, the first user aside from Satoshi, who lived in the same town as a Satoshi Nakamoto; Unforunately Hal passed away in 2014. Since then, Craig Wright has attempted to claim the fame, but others such as Vitalik Buterin have been quick to point of the unlikelihood of that being true.</p>
            }
        ]
    }

}