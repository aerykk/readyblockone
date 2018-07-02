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
                                        <h3 className="title iq-tw-5 iq-mb-20">Not found</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                That subsite cannot be found.
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
