import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "../slices/customerSlice"
//LINK - Entire store handler has been declared on behalf of the 
export const store = configureStore({
    reducer: {
        customer:customerReducer,
    }
});