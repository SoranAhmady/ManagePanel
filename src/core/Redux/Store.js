import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './GetAPI';

const store = configureStore({
    reducer:{
        User:UserSlice
    }
})
export default store