import {configureStore} from "@reduxjs/toolkit"
import dataSlice from "../features/dataSlice.jsx";

export default configureStore({
    reducer: {
        data: dataSlice
    }
})