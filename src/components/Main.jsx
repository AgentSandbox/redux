import React from 'react'
import Data from "./Data.jsx"
import {useDispatch} from "react-redux"
import {setData} from "../features/dataSlice.jsx";

const Main = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <input
                type='text'
                placeholder='Second Name'
                onChange={(e) => {dispatch(setData(e.target.value))}}
                className='w-1/5 p-1 mb-2 focus:outline-none focus:border-lime-800 focus: border-2 '
            />
            <Data/>
        </div>
    );
};

export default Main;