import * as actionTypes from "../actionTypes";

const inputValue = {
  input: "",
};

const inputReducer = (state = inputValue, action) => {
  switch (action.type) {
    case actionTypes.LINK_TO_INPUT: {
      return { ...state, input: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default inputReducer;
