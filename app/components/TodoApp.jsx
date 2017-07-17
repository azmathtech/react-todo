var React = require('react');
var Navigation = require('Navigation');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Code the app'
        },
        {
          id: 4,
          text: 'Combine the apps'
        }
      ]
    };
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
