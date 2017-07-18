var React = require('react');
var Navigation = require('Navigation');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Code the app'
        },
        {
          id: uuid(),
          text: 'Combine the apps'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    //alert('new todo: ' + text);
    this.setState({
      todos: [
        ...this.state.todos, //this line addes in the original arrey elements
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
