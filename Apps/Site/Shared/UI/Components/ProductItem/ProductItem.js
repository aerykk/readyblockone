const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Product from '../Product'

export default class ProductItem extends Component {
    render() {
        const { product } = this.props

        return (
            <div
                style={{ marginBottom: 20 }}>
                <Product
                    title={product.title}
                    price={product.price} />
                <button
                    onClick={this.props.onAddToCartClicked}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
        )
    }
}

ProductItem.propTypes = {
    product: T.shape({
        title: T.string.isRequired,
        price: T.number.isRequired,
        inventory: T.number.isRequired
    }).isRequired,
    onAddToCartClicked: T.func.isRequired
}
