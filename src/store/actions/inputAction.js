import * as actionTypes from "../actionTypes";

const connectInputs = (payload) => {
  return {
    type: actionTypes.LINK_TO_INPUT,
    payload,
  };
};

export default connectInputs;
