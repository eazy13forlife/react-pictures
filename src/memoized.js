import { createSelector } from "reselect";

const makeGetSpan = () => {
  return createSelector(
    (state) => state.spans,
    (state, id) => id,
    (spans, id) => {
      console.log("mikedsfg");
      return spans[id];
    }
  );
};

export default makeGetSpan;
