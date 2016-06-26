import React, { Component, PropTypes } from 'react'
import Product from '../Product'

// export const ADD_TO_CART = 'ADD_TO_CART'
// export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
// export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
// export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
// export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export default class Cart extends Component {
  render() {
    const { products, total, onCheckoutClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      products.map(product =>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}/>
    )

    return (
      <div>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}