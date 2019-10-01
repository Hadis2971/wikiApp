import React from "react";

const Header = (props) => {
    const { title, className, style } = props;
    return (
       <h1 style={style} className={className}>{title}</h1>
    );
};

export default Header;