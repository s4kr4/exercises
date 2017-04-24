import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TodoList from '../components/todoList'

export default class extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = configureStore({ todos: [] }, isServer)
    return { initialState: store.getState(), isServer }
  }

  constructor(props) {
    super(props)
    this.store = configureStore(props.initialState, props.isServer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <MuiThemeProvider>
          <TodoList />
        </MuiThemeProvider>
      </Provider>
    )
  }
}
