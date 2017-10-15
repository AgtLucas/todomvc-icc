import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AddTodoInput from '../AddTodoInput'
import CompleteTodoCheckbox from '../CompleteTodoCheckbox'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    onSaveAfterEdit: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    this.setState({ editing: false })
    this.props.onSaveAfterEdit(id, text)
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <AddTodoInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <CompleteTodoCheckbox id={ todo.id }/>
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
