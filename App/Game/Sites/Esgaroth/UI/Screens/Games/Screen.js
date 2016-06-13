const Framework = require('../../../../../../Framework');
const {React, PropTypes, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import StokeLayout from '../../Layouts/Stoke';
import Markdown from '../../../../Default/UI/Components/Markdown';

import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../../Actions'

class Screen extends Component {
    static propTypes = {
        games: PropTypes.object.isRequired
    }

    render() {
        const { site, games } = this.props

        const breadcrumb = (
            <ul className="breadcrumb">
                <li><a href="/"><i className="icon-home"></i> {site.title}</a></li>
                <li className="active"><a href="/games">Games</a></li>
            </ul>
        );

        return (
            <StokeLayout breadcrumb={breadcrumb}>
              <div className="box">
                  <div className="tab-header">
                      Games
                  </div>
                  <div className="padded">
                      <ul className="games">
                          {games.list.map(item => (
                              <li>
                                  <Link to={"/games/" + item.code} className="button large">
                                      <i className={"icon-" + item.icon}></i>
                                      <span>{item.title}</span>
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
            </StokeLayout>
        );
    }
}

function mapStateToProps(state) {
    const { site, games } = state

    return {
        site,
        games
    }
}

export default connect(mapStateToProps)(Screen);
