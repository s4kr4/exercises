import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

import TodoList from './todoList'

export default class extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = configureStore({ todoList: [] }, isServer)
    return { initialState: store.getState(), isServer }
  }

  constructor(props) {
    super(props)
    this.store = configureStore(props.initialState, props.isServer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <TodoList />
      </Provider>
    )
  }
}
