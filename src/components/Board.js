import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { play, replay, end } from "../action/constants";

class Board extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(rowIndex, colIndex) {
    console.log(this.props.isFinish);
    if (!this.props.isFinish) {
      this.props.play(rowIndex, colIndex);
      setTimeout(() => {
        let newGameState = this.props.gameState;
        let gameResult = this.getGameResult(newGameState);
        if (gameResult !== "") {
          alert(gameResult);
          this.props.end();
        }
      });
    }
  }

  getGameResult(newGameState) {
    let winLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let gameState1D = [];
    let isFullFilled = true;
    newGameState.map(row => {
      return row.map(cell => {
        if (cell === "") {
          isFullFilled = false;
        }
        gameState1D.push(cell);
        return null;
      });
    });

    let winner = "";
    winLine.map(row => {
      let [c1, c2, c3] = row;
      if (
        gameState1D[c1] === gameState1D[c2] &&
        gameState1D[c2] === gameState1D[c3] &&
        gameState1D[c1] !== ""
      ) {
        winner = `${gameState1D[c1]} win!`;
      }
    });

    if (isFullFilled && winner === "") {
      winner = "DRAW!";
    }
    return winner;
  }

  render() {
    return (
      <div className="board">
        {this.props.gameState.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return (
              <div
                key={colIndex}
                className="square"
                onClick={() => {
                  this.handleClick(rowIndex, colIndex);
                }}
              >
                {cell}
              </div>
            );
          });
        })}
        <button onClick={this.props.replay}>RePlay</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameState,
    isFinish: state.isFinish
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ play, replay, end }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
