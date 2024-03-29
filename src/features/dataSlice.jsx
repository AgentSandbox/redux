import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: "Anton"
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
    }
})

export const {setData} = dataSlice.actions
export default dataSlice.reducer