import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setString } from './Testing56';


const UpdateString = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
useEffect(() => {
 const handleUpdate = () => {
        dispatch(setString(input));
    };
    handleUpdate();
},[input])
   

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button >Update Global String</button>
           
        </div>
    );
};


export default UpdateString;
