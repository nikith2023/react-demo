import { LOGIN_ERROR, LOGIN_SUCESS } from "../constants/actionTypes";
import axios from "axios";
import { url } from "../constants/utils";

const userLogin = (data) => async (dispatch) => {
  axios
    .post(`${url}users/authenticate`, {
      ...data,
    })
    .then(function (response) {
      console.log(response);
      if (response.statusText == "OK") {
        dispatch({
          type: LOGIN_SUCESS,
          payload: {
            user: response.data,
            statusCode: response.status,
          },
        });
      }
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
      return Promise.reject(error);
    });
};

export { userLogin };
