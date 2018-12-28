export const PLAY = "PLAY";
export const REPLAY = "REPLAY";
export const END = "END";

export const play = (rowIndex, colIndex) => {
  return {
    type: PLAY,
    rowIndex,
    colIndex
  };
};
export const replay = () => {
  return {
    type: REPLAY
  };
};
export const end = () => {
  return {
    type: END
  };
};
