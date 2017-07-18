var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();

      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //Sort todos with non-completed first
    //if you return -1 then a should come before b
    //if you return 1 then b should come before a
    //if you return 0 then no change a and b are equal
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }

};

// // the two statements below do the same thing
// // it is two methods of writing an if statement
// return $.isArray(todos) ? todos : [];  //ternary operator
//
// if ($isArray(todos)) {  //traditional if statement
//   return todos;
// } else {
//   return [];
// }


// //if statements - the below are the same
// if (a.completed === false && b.completed === true) {}
// if (!a.completed && b.completed) {}
