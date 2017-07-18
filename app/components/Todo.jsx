var React = require('react');
var Navigation = require('Navigation');

var Todo = React.createClass({

  render: function () {
    var {id, text, completed} = this.props;

    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;


//got error with Checked so tried defaultChecked
