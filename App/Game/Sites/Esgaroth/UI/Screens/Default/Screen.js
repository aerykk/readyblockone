const Framework = require('../../../../../../Framework');
const {React, PropTypes, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import StokeLayout from '../../Layouts/Stoke';
import Markdown from '../../../../Default/UI/Components/Markdown';

import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../../Actions'

class Screen extends Component {
    static propTypes = {
    }
    
    constructor() {
        super()
        
        this.state = {
            page: {
                title: '',
                slim: false
            }
        }
    }
    
    onPageChange(state) {
        this.setState({
            page: state
        });
    }

    render() {
        const { site, location } = this.props

        const content = (
            <Markdown src={"/App/Game/Sites/Esgaroth/Pages/" + (location || 'home') + ".md"} onChange={(state) => this.onPageChange(state)} />
        )

        const page = this.state.page

        const breadcrumb = (
            <ul className="breadcrumb">
                <li><a href="/"><i className="icon-home"></i> {site.title}</a></li>
                <li><a href={location}>{page.title}</a></li>
            </ul>
        )

        return (
            <StokeLayout breadcrumb={breadcrumb}>
                {!page.slim && (
                    <div className="box">
                        <div className="tab-header">
                            {page.title}
                        </div>
                        <div className="padded">
                            {content}
                        </div>
                    </div>
                )}
                {page.slim && (
                    content
                )}
            </StokeLayout>
        );
    }
}

function mapStateToProps(state) {
    const { site, routing } = state

    // TODO: Figure out WTF is going on here. Server is string, browser is object
    var location = null;
    if (typeof routing.locationBeforeTransitions === 'string') {
        location = routing.locationBeforeTransitions.replace('/', '')
    } else if (typeof routing.locationBeforeTransitions === 'object' && routing.locationBeforeTransitions) {
        location = routing.locationBeforeTransitions.pathname
    } else if (typeof window !== 'undefined') {
        location = window.location.pathname.replace('/', '')
    }


    return {
        site,
        location
    }
}

export default connect(mapStateToProps)(Screen);
