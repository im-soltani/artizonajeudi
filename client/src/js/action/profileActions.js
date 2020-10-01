import axios from 'axios';
 import { GET_PROFILE,
   PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE, 
    GET_ERRORS, 
    SET_CURRENT_USER, 
    GET_PROFILES,
    SET_LOADING, 
 AUTH_ERROR,
 REGISTER_USER,
 CREATE_PROFILE
  }
    from '../const/actionType';
//create a profile
 export const createProfile = (formData) => async (dispatch) => {
  dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addprofile", formData,options)
      dispatch({
        type: CREATE_PROFILE,
        payload: res.data 
      });
      console.log(res.data)
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
      });
    }
  };
  const setLoading = () => (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
  };
  // GET current profile:::::::::::::::::::::::::::::::
export const getCurrentProfile = () => async(dispatch) => {
  //dispatch(setLoading());
  try {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/auth/currentprofile",options)
   dispatch({
      type: GET_PROFILE,
      payload: res.data, 
    });
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
};

