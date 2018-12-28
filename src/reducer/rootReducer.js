import gameState from "./gameState";
import currentPlayer from "./currentPlayer";
import isFinish from "./isFinish";

const rootReducer = (state = {}, action) => {
  const player = state.currentPlayer;
  return {
    gameState: gameState(state.gameState, { ...action, player }),
    currentPlayer: currentPlayer(state.currentPlayer, action),
    isFinish: isFinish(state.isFinish, action)
  };
};

export default rootReducer;
