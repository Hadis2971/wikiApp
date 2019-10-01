import React from "react";

const Input = (props) => {
    const { type, value, changeValueHanler } = props;
    return (
        <div className="form-group">
            <input className="form-control" type={type} value={value} onChange={changeValueHanler}/>
        </div>
    );
};

export default Input;
