var React = require('react');
var Navigation = require('Navigation');

var Todo = React.createClass({

  render: function () {
    var {id, text} = this.props;

    return (
      <div>
        {id + ': ' + text}
      </div>
    );
  }
});

module.exports = Todo;
