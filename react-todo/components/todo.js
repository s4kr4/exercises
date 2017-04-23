import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className={"todo" + (this.props.done ? ' done' : '')}
        style={{textDecoration: this.props.done ? 'line-through' : 'none'}}
        onClick={ this.props.onClick }>
        { this.props.text }
      </li>
    )
  }
}
