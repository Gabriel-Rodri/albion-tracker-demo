import axios from "axios";

export const GET_NAMES = "GET_NAMES";


export const getNames = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/dataPlayer?name=${name}`
      );
      return dispatch({
        type: "GET_NAMES",
        payload: data,
      });
    } catch (err) {
      console.error(err);
      return dispatch({
        type: "GET_NAMES",
        payload: []
      })
    }
  };
};