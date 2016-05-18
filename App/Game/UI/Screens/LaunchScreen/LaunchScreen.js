import React from 'react';
import StokeLayout from '../../Layouts/StokeLayout';
import Markdown from '../../Components/Markdown';

var LaunchScreen = React.createClass({
    getInitialState: function () {
        return {
            page: {
                title: '',
                body: '',
                items: [],
                options: {}
            }
        };
    },
    onPageChange: function(state) {
        if (JSON.stringify(this.state.page) === JSON.stringify(state)) {
            return;
        }

        this.setState({page: state});
    },
    render: function() {
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
            <StokeLayout breadcrumb={breadcrumb}>
                {!this.state.page.options.slim && (
                    <div className="box">
                        <div className="tab-header">
                            {this.state.page.title}
                        </div>
                        <div className="padded">
                            <Markdown src={"/App/Game/Assets/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                        </div>
                    </div>
                )}
                {this.state.page.options.slim && (
                    <Markdown src={"/App/Game/Assets/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                )}
            </StokeLayout>
        );
    }
});

var styles = {
};

export default LaunchScreen;
