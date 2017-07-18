var React = require('react');
var uuid = require('node-uuid');

var Navigation = require('Navigation');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function (text) {
    //alert('new todo: ' + text);
    this.setState({
      todos: [
        ...this.state.todos, //this line addes in the original arrey elements
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },

  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
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
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;


// [
//   {
//     id: uuid(),
//     text: 'Walk the dog',
//     completed: false
//   },
//   {
//     id: uuid(),
//     text: 'Clean the yard',
//     completed: true
//   },
//   {
//     id: uuid(),
//     text: 'Code the app',
//     completed: true
//   },
//   {
//     id: uuid(),
//     text: 'Combine the apps',
//     completed: false
//   }
// ]
