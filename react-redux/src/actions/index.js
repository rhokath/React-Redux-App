import axios from 'axios';


export const FETCH_CAT_DATA_START = 'FETCH_CAT_DATA_START';
export const FETCH_CAT_DATA_SUCCESS = 'FETCH_CAT_DATA_SUCCESS';
export const FETCH_CAT_DATA_FAILURE = 'FETCH_CAT_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_CAT_DATA_START });
    axios
      .get("https://dog.ceo/api/breed/dalmatian/images")
      .then(res => {
        // res.data.data
        console.log("this is the response", res);
        dispatch({ type: FETCH_CAT_DATA_SUCCESS, payload: res.data.message});
      })
      .catch(err => {
          console.log("this is an error", err)
        // dispatch({ type: FETCH_CAT_DATA_FAILURE, });
      });
  };
};
