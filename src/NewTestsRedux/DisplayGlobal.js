import React from 'react';
import { useSelector } from 'react-redux';

const DisplayString = () => {
    const globalString = useSelector((state) => state.globalString.value);

    return (
        <div>
            <p>Global String: {globalString}</p>
        </div>
    );
};

export default DisplayString;
