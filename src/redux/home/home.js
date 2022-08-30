import apiServices from '../../api/http';

const GET_DATA = 'space-thub/misssions/GET_DATA';

export const getData = (value) => async (dispatch) => {
  try {
    const res = await apiServices.get();
    res.data.sort((a, b) => b[value] - a[value]);
    const selectedData = [];
    for (let i = 0; i < 20; i += 1) {
      selectedData.push(res.data[i]);
    }
    dispatch({
      type: GET_DATA,
      payload: selectedData,
    });
  } catch (err) {
    dispatch({
      type: GET_DATA,
      payload: err,
    });
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
