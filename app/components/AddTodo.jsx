import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class AddTodo extends React.Component {
//export var AddTodo = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      //this.props.onAddTodo(todoText);
      dispatch(actions.startAddTodo(todoText));
    } else {
      //places curser back in field if the user has not placed valid entry
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
