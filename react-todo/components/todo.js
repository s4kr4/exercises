import React from 'react'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { text, done, onClick } = this.props
    return (
      <li className={"todo" + (done ? ' done' : '')}
        style={{textDecoration: done ? 'line-through' : 'none'}}
        onClick={ onClick }>
        { text }
      </li>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  onClick: PropTypes.func,
}
