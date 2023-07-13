import { SET_IMAGES } from "../constants/actionTypes";

const initialState = {
  images: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default ImageReducer;
