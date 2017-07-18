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
    
  }
}

// // the two statements below do the same thing
// // it is two methods of writing an if statement
// return $.isArray(todos) ? todos : [];  //ternary operator
//
// if ($isArray(todos)) {  //traditional if statement
//   return todos;
// } else {
//   return [];
// }
