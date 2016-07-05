const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Layout from '../../Layouts/Stoke';

class Screen extends Component {
    static propTypes = {
        games: T.object.isRequired
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
            <Layout breadcrumb={breadcrumb}>
                <div style={{padding: "20px"}}>
                  <ul className="games">
                      {games.list.map((item, i) => {
                          var posList = [
                              '0% 40%',
                              '100% 40%',
                              '20% 40%',
                              '0% 40%',
                              '20% 40%'
                          ]
                          var pos = posList[i]
                          return (
                              <li>
                                  <Link to={"/game/" + item.code} className="button large" style={{background: "url(http://wallpapercave.com/wp/oE14KTB.jpg) no-repeat " + pos, color: "#fff", boxShadow: "0 1px 32px rgba(0, 0, 0, 0.7), inset 0 1px 18px rgba(255, 255, 255, 0.5)", border: "1px solid #444"}}>
                                      <i className={"icon-" + item.icon}></i>
                                      <span>{item.title}</span>
                                  </Link>
                              </li>
                          )
                      })}
                  </ul>
                </div>
            </Layout>
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
