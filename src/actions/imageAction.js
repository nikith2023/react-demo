import { SET_IMAGES } from "../constants/actionTypes";
import { url } from "../constants/utils";
import axios from "axios";

const getUserImages = () => async (dispatch) => {
    axios
      .get(`${url}users/images`,)
      .then(function (response) {
        console.log(response);
        if (response.statusText == "OK") {
          dispatch({
            type: SET_IMAGES,
            payload: response.data,
          });
        }
        return Promise.resolve(response);
      })      
  };
  
  export {getUserImages}