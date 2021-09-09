import axios from "axios";
import { bmicAL_REGISTER_FAIL, bmicAL_REGISTER_REQUEST, bmicAL_REGISTER_SUCCESS } from "../constants/bmicAL";

export const bmiresult = (weight, height) => async (dispatch) => {
    dispatch({ type: bmicAL_REGISTER_REQUEST, payload: { weight, height } });
    try {
      const { data } = await axios.post('/api/bmi/seed', { weight, height });
      dispatch({ type: bmicAL_REGISTER_SUCCESS, payload: data });
      localStorage.setItem('bmicALinfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: bmicAL_REGISTER_FAIL,  
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };