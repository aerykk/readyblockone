const Framework = require('../../../../../../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import BasicLayout from '../../Layouts/Basic';
import Markdown from '../../../../Default/UI/Components/Markdown';

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
    }
    onPageChange(state) {
        if (JSON.stringify(this.state.page) === JSON.stringify(state)) {
            return;
        }

        this.setState({page: state});
    }
    render() {
        var page = this.props.location.pathname.replace('/', '');

        if (!page) { page = 'home'; }

        var breadcrumb = null;

        this.state.page.items.forEach(function(item) {
            if (item.title === 'Breadcrumb') {
                breadcrumb = item.body;
            }
        });

        // TODO: Remove this hack
        this.state.page.options.slim = (page === 'home');

        return (
            <BasicLayout breadcrumb={breadcrumb}>
                {!this.state.page.options.slim && (
                    <div className="box">
                        <div className="tab-header">
                            {this.state.page.title}
                        </div>
                        <div className="padded">
                            <Markdown src={"/App/Game/Sites/Edoras/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                        </div>
                    </div>
                )}
                {this.state.page.options.slim && (
                    <Markdown src={"/App/Game/Sites/Edoras/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                )}
            </BasicLayout>
        );
    }
}

export default Screen;
