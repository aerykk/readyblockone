import Header from '../../../../cryptoreviews/UI/Components/Header'
import Footer from '../../../../cryptoreviews/UI/Components/Footer'
import NetworkSlider from '../../../../cryptoreviews/UI/Components/NetworkSlider'
import TopDisplay from '../../../../cryptoreviews/UI/Components/TopDisplay'
import Intro from '../../../../cryptoreviews/UI/Components/Intro'

const React = require('react')

const data = {
    header: {
        logo: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/logos/ethereum.png"
    }
}

class Layout extends React.Component {
    render() {
        return (
            <div>
                <TopDisplay />
                <Header {...data.header} />

                <div className="main-content">
                    <section id="history" className="overview-block-ptb iq-event iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#history">History</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <p>Ethereum is an open-source public service that uses blockchain technology to facilitate smart contracts and cryptocurrency trading securely without a third party. There are two accounts available through Ethereum: externally owned accounts (controlled by private keys influenced by human users) and contract accounts. Ethereum allows developers to deploy all kinds of decentralized apps.</p>
                                    <br />
                                    <p>Vitalik Buterin was introduced and intrigued by blockchain technology when he got involved in Bitcoin as a 17-year-old programmer in 2011 and co-founded Bitcoin Magazine. He started to imagine a platform that went beyond the financial use cases allowed by Bitcoin and released a white paper in 2013 describing what would ultimately become Ethereum using a general scripting language.</p>
                                    <br />
                                    <p>The key differentiator from Bitcoin was the platform’s ability to trade more than just cryptocurrency.</p>
                                    <br />
                                    <p>In 2014, Buterin and the other co-founders of Ethereum launched a crowdsourcing campaign where they sold participants Ether (Ethereum tokens) to get their vision off the ground and raised more than $18 million. The first live release of Ethereum known as Frontier was launched in 2015. Since then, the platform has grown rapidly and today there are hundreds of developers involved.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Layout
