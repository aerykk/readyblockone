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
            <Markdown src={"/App/Game/Sites/Esgaroth/Pages/" + ((location && location.replace('/', '')) || 'home') + ".md"} onChange={(state) => this.onPageChange(state)} />
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

    return {
        site,
        location: routing.locationBeforeTransitions && routing.locationBeforeTransitions.pathname
    }
}

export default connect(mapStateToProps)(Screen);
