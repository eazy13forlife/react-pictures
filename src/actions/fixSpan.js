import types from "./types.js";
const fixSpan = (id, spanNumber) => {
  return {
    type: types.FIX_SPAN,
    payload: {
      [id]: spanNumber,
    },
  };
};

export default fixSpan;
