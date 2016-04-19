var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper'),
    Board = require('./board');

var Game = React.createClass({
  getInitialState: function () {
    return { board: new Minesweeper.Board(10, 5) };
  },

  updateGame: function () {

  },

  render: function () {
    return <Board board={this.state.board} updateGame={this.updateGame}/>;



  }

});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Game/>, document.getElementById("game"));
});
