import { configureStore } from '@reduxjs/toolkit'
import {default as counter} from './slices/counterSlice'; 

export default configureStore({
  reducer: {counter}
})