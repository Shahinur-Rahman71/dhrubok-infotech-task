import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const infoSlide = createSlice({
  name: "info",
  initialState: {
    data: []
  },
  reducers: {
    addInfo: (state, action) => {
      state.data.push(action.payload);
    },
    getInfo: (state, action) => {
      state.data = [action.payload];
    }
  }
});

export const getInfoAsync = () => async (dispatch) => {
  try {
    await axios.get(`https://randomuser.me/api/?results=50`).then(response => {
        dispatch(getInfo(response.data.results));
    }).catch(err => {
        console.log(err)
    })
    
  } catch (err) {
    throw new Error(err);
  }
};

export const addInfoAsync = (data) => async (dispatch) => {
  try {
    await axios.post('https://httpbin.org/post', data).then(response => {
        dispatch(addInfo(response.data));
    }).catch(err => {
        console.log(err)
    })
    
  } catch (err) {
    throw new Error(err);
  }
};

export const { addInfo, getInfo } = infoSlide.actions;
export const showInfo = (state) => state.info.data;
export default infoSlide.reducer;
