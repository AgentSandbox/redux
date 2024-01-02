import React from 'react';
import { useSelector } from "react-redux";

const Data = () => {
    const name = useSelector((state) => state.data.data)
    return (
        <div className="font-bold">
            {name}
        </div>
    );
};

export default Data;