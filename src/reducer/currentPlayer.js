import { PLAY, REPLAY } from "../action/constants";

function currentPlayer(state = "X", action) {
  switch (action.type) {
    case PLAY:
      let newPlayer = state === "X" ? "O" : "X";
      return newPlayer;
    case REPLAY:
      let initialPlayer = "X";
      return initialPlayer;
    default:
      return state;
  }
}

export default currentPlayer;
