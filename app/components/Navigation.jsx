var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Todo App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >First Link</IndexLink>
            </li>
            <li>
              <IndexLink to="/SecondLink" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >SecondLink</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Designed by <a href="http://www.recoverycoffees.com" target="_blank">Michael Evans</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Navigation;
