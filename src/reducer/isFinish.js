import { END } from "../action/constants";

function isFinish(state = false, action) {
  switch (action.type) {
    case END:
      return true;
    default:
      return state;
  }
}

export default isFinish;
