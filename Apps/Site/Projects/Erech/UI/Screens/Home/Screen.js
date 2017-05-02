const Framework = require('../../../../../../../Framework');
const {React, PropTypes, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import StokeLayout from '../../Layouts/Stoke';
import Markdown from '../../../../../Shared/UI/Components/Markdown';

import { connect } from 'react-redux'

class Screen extends Component {
    constructor() {
        super();
        this.state = {
            page: {
                title: '',
                body: '',
                items: [],
                options: {}
            }
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
    onPageChange(state) {
        if (JSON.stringify(this.state.page) === JSON.stringify(state)) {
            return;
        }

        this.setState({page: state});
    }
    render() {
        var page = this.props.location;

        if (!page) { page = 'home'; }

        var breadcrumb = null;

        this.state.page.items.forEach(function(item) {
            if (item.title === 'Breadcrumb') {
                breadcrumb = item.body;
            }
        });

        // TODO: Remove this hack
        this.state.page.options.slim = (page === 'home');

        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

        return (
            <StokeLayout breadcrumb={breadcrumb}>
                {!this.state.page.options.slim && (
                    <div className="box">
                        <div className="tab-header">
                            {this.state.page.title}
                        </div>
                        <div className="padded">
                            <Markdown src={"/Apps/Site/Projects/Erech/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                        </div>
                    </div>
                )}
                {this.state.page.options.slim && (
                    <Markdown src={"/Apps/Site/Projects/Erech/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                )}
            </StokeLayout>
        );
    }
}

function mapStateToProps(state) {
    const { routing } = state
    
    // TODO: Figure out WTF is going on here. Server is string, browser is object
    var location = null;
    if (typeof routing.locationBeforeTransitions === 'string') {
        location = routing.locationBeforeTransitions.replace('/', '')
    } else if (typeof routing.locationBeforeTransitions === 'object' && routing.locationBeforeTransitions) {
        location = routing.locationBeforeTransitions.pathname.replace('/', '')
    } else if (typeof window !== 'undefined') {
        location = window.location.pathname.replace('/', '')
    }

    return {
        location
    }
}

export default connect(mapStateToProps)(Screen);
