import Header from '../../../../../cryptoreviews/UI/Components/Header'
import Footer from '../../../../../cryptoreviews/UI/Components/Footer'
import NetworkSlider from '../../../../../cryptoreviews/UI/Components/NetworkSlider'
import TopDisplay from '../../../../../cryptoreviews/UI/Components/TopDisplay'
import Intro from '../../../../../cryptoreviews/UI/Components/Intro'

const React = require('react')

const data = {
    header: {
        logo: "/Apps/Site/Projects/in5mins/Assets/images/logos/crypto.png"
    }
}

class Layout extends React.Component {
    render() {
        return (
            <div>
                <TopDisplay />
                <Header {...data.header} />

                <section id="iq-home" class="iq-banner overview-block-pt iq-over-blue-90">
                    <div id="intro" class="container">
                    </div>
                </section>
                <div className="main-content" style={{clear: 'both'}}>
                    <section class="overview-block-ptb">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    {this.props.children}
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
