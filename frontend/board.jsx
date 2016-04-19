var React = require('react');
var Tile = require('./tile');

var Board = React.createClass({

  render: function() {
    var self = this;
    var board = this.props.board.grid.map(function(row, rowIdx) {
      return <div key={rowIdx} >{row.map(function(tile, tileIdx) {
        return <Tile key={tileIdx} tile={tile}
                     updateGame={self.props.updateGame}/>;
      })}</div>;
    });

    return (
      <div>
        {board}
      </div>
    );
  }

});

module.exports = Board;
