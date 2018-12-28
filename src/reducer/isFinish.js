import { PLAY, REPLAY, END } from "../action/constants";

function isFinish(state = false, action) {
  switch (action.type) {
    case REPLAY:
      return false;
    case PLAY:
      return false;
    case END:
      return true;
    default:
      return state;
  }
}

export default isFinish;
