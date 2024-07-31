import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Featurs/TodoSlices/TodoSlice'
export const MyStore=configureStore({
    reducer:todoReducer
})