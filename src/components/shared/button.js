import React from "react";

const Button = (props) => {
    const { title, style, buttonFunctionality, className } = props;
    return (
        <button 
          className={className} 
          style={style} 
          onClick={buttonFunctionality}>{title}</button>
    );
};

export default Button;