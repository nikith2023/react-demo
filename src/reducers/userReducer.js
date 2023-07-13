import { LOGIN_SUCESS, LOGIN_ERROR } from "../constants/actionTypes";

const initialState = {
  user: {},
  statusCode: "",
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCESS:
      return {
        ...state,
        user: payload.user,
        statusCode: payload.statusCode,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        user: {},
        statusCode: 400,
      };
    default:
      return state;
  }
};

export default UserReducer;
