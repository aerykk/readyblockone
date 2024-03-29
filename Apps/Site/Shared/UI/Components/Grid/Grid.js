const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


import Row from '../Row'

class Grid extends Component {
    static propTypes = {
        children: T.node.isRequired
    }

    render() {
        let children = this.props.children

        children = Array.isArray(children) ? children : [children]

        let row = []
        let rows = []

        function isFullRow() {
            let span = 0
            row.map((_row) => {
                span += _row.props.span
            })

            if (span === 24) return true

            return false
        }

        children.map((child, index) => {
            row.push(child)

            if (isFullRow()) {
                rows.push(row)
                row = []
            }
        })

        // Push any remaining row into the rows
        if (row.length) {
            rows.push(row)
        }

        let GridComponent = rows.map((row, index) => {
            let content = row.map((_row) => {
                return _row
            })

            return (
                <Row key={index} style={styles.row}>
                    {content}
                </Row>
            )
        })

        if (GridComponent.length > 0) {
            return (
                <View style={Object.assign({}, styles.container, this.props.style)}>
                    {GridComponent}
                </View>
            )
        } else {
            return null
        }

    }
}

const styles = StyleSheet.create({
    container: {
    },
    row: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    }
})

export default Grid
