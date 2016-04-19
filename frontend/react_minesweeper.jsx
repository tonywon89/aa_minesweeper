var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper');

var Game = React.createClass({
  getInitialState: function () {
    return ({board: new Minesweeper.Board()});
  }
});
