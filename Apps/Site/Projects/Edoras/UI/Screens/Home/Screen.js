const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import Layout from '../../Layouts/Basic'

class Screen extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <Layout>
                <div className="c-intro c--shown">
                    <p>Your grand adventure in language translation is about to begin....</p>
                    <div className="c-menu c--shown">
                        <h2>Choose your adventure:</h2>
                        <button className="js-load-game button large black" data-id="platinum">Pokemon Platinum</button>
                    </div>
                    <div className="c-alert"><strong>Loading...</strong> Please wait, this may take a while (10MB).</div>
                </div>

                <div className="c-game-panel c--pokemon-platinum">
                    <div className="c-primary-sidebar">
                        <form id="filters" className="c-filters">
                            <div className="c-filters__search">
                                <input className="c-filters__search-input" type="text" name="search" defaultValue={this.state.searchText} placeholder="Search" onchange={(e)=>this.onChangeSearchText(e)} />
                                <input className="c-filters__search-submit" type="submit" name="submit" defaultValue="Submit" />
                            </div>

                            <div className="c-filters__status"></div>

                            <div className="c-filters__navigation">
                                <a href="javascript:;" className="c-filters__navigation-control c--back">BACK</a>
                                <a href="javascript:;" className="c-filters__navigation-control c--prev">PREV</a>
                                <a href="javascript:;" className="c-filters__navigation-control c--next">NEXT</a>
                            </div>

                            <div className="c-filters__listing"></div>
                        </form>
                    </div>

                    <div className="c-main">
                        <h1 className="c-title"></h1>
                        <div id="sections"></div>
                    </div>

                    <div className="c-secondary-sidebar">
                        <div className="c-translation">
                            <div className="c-translation__original">
                                <h2>Original:</h2>
                                <div className="c-translation__original-result">None yet</div>
                            </div>
                            <div className="c-translation__translated">
                                <h2>Translated:</h2>
                                <div className="c-translation__translated-result">None yet</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tts"></div>

                <table className="sectionTemplate">
                    <thead>
                        <tr>
                            <th>English</th>
                            <th>Japanese</th>
                            <th className="it">Italian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="c-message en" data-lang="en"></td>
                            <td className="c-message jp" data-lang="jp"></td>
                            <td className="c-message it" data-lang="it"></td>
                        </tr>
                    </tbody>
                </table>
            </Layout>
        )
    }
}

export default Screen
