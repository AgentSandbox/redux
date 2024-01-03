import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../features/dataSlice.jsx";

const Main = () => {
    const dispatch = useDispatch()
    const name = useSelector((state) => state.data.data)
    return (
        <div>
            <input
                className="border-2"
                value={name}
                onChange={(e)=>{dispatch(setData(e.target.value))}}
                type="text"
            />
            <div>
                {name}
            </div>

        </div>
    );
};

export default Main;