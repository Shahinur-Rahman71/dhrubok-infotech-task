import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import info from './info'

const reducer = combineReducers({
  // here we will be adding reducers
    info
})
const store = configureStore({
  reducer,
})
export default store;