import React from "react";

const Input = (props) => {
    const { type, value, changeValueHanler } = props;
    return (
        <input type={type} value={value} onChange={changeValueHanler}/>
    );
};

export default Input;
