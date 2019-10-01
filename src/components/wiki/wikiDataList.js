import React from "react";
import "../style/../../style/wiki-data-list.css";
const uuidv1 = require('uuid/v1');


const WikiDataList = (props) => {
    const { data } = props;
    const keys = Object.keys(data);
    const list = keys.map((k) => {
        return <li key={uuidv1()}>{<a href={k}>{k}</a>}</li>
    }); 
    return (
        <ul id="list">{list}</ul>
    );
};

export default WikiDataList;