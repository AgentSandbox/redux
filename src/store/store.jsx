import {configureStore} from "@reduxjs/toolkit"
import dataReducer from "../features/dataSlice.jsx";

export default configureStore({
    reducer: {
        data: dataReducer
    }
})

