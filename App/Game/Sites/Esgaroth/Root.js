import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './Store'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.route}
      </Provider>
    )
  }
}
