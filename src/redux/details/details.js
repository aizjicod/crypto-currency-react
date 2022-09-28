import apiServices from '../../api/http';

const GET_DATA_ID = 'space-thub/misssions/GET_DATA_ID';

export const getIdData = (id) => async (dispatch) => {
  try {
    const res = await apiServices.getId(id);
    dispatch({
      type: GET_DATA_ID,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_DATA_ID,
      payload: err,
    });
  }
};

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_DATA_ID:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
