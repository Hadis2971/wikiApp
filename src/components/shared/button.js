import React from "react";

const Button = (props) => {
    const { title, style, buttonFunctionality } = props;
    return (
        <button style={style} onClick={buttonFunctionality}>{title}</button>
    );
};

export default Button;