const Framework = require('../../../../../../Framework');
const {React, PropTypes, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import StokeLayout from '../../Layouts/Stoke';
import Markdown from '../../../../Default/UI/Components/Markdown';

import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../../Actions'

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
componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
}

componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
        const { dispatch, selectedSubreddit } = nextProps
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
}

handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
}

handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
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
                            <Markdown src={"/App/Game/Sites/Esgaroth/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                        </div>
                    </div>
                )}
                {this.state.page.options.slim && (
                    <Markdown src={"/App/Game/Sites/Esgaroth/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                )}
                <div>
                    <p>
                        {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                            </span>
                        }
                        {!isFetching &&
                            <a href='#'
                                onClick={this.handleRefreshClick}>
                                Refresh
                            </a>
                        }
                    </p>
                    {isFetching && posts.length === 0 &&
                        <p>Loading...</p>
                    }
                    {!isFetching && posts.length === 0 &&
                        <p>Empty.</p>
                    }
                    {posts.length > 0 &&
                        <div style={{ opacity: isFetching ? 0.5 : 1 }} hidden>
                            {posts.length}
                        </div>
                    }
                </div>
            </StokeLayout>
        );
    }
}

Screen.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit, routing } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

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
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
        location
    }
}

export default connect(mapStateToProps)(Screen);
