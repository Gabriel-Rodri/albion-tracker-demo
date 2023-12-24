import axios from "axios";

export const GET_NAMES = "GET_NAMES";


export const getNames = (name) => {
  return async (dispatch) => {
    try {
      console.log(name);
      const { data } = await axios.get(
        `http://localhost:3001/dataPlayer?name=${name}`
      );
      console.log(data);
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