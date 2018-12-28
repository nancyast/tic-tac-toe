import { PLAY, REPLAY } from "../action/constants";

let defaultState = [["", "", ""], ["", "", ""], ["", "", ""]];

function gameState(state = defaultState, action) {
  switch (action.type) {
    case PLAY:
      let newGameState = state.map((row, i) => {
        return row.map((cell, j) => {
          if (i === action.rowIndex && j === action.colIndex) {
            return action.player;
          } else {
            return cell;
          }
        });
      });
      return newGameState;
    case REPLAY:
      let initialGameState = [["", "", ""], ["", "", ""], ["", "", ""]];
      return initialGameState;
    default:
      return state;
  }
}

export default gameState;
