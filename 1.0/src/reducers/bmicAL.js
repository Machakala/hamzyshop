import { bmicAL_REGISTER_FAIL, bmicAL_REGISTER_REQUEST, bmicAL_REGISTER_SUCCESS } from "../constants/bmicAL";

export const bmicALReducer = (state = {}, action) => {
    switch (action.type) {
      case bmicAL_REGISTER_REQUEST:
        return { loading: true };
      case bmicAL_REGISTER_SUCCESS:
        return { loading: false, bmicALinfo: action.payload };
      case bmicAL_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };  