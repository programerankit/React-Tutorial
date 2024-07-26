import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Slices/TodoSlices/TodoSlice'


export const MyStore=configureStore({
    reducer:todoReducer
})