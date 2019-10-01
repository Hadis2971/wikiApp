import React, { Component } from "react";

import WikiDisplay from "./wikiDisplay";
import Header from "../shared/header";
import Input from "../shared/input";

import "../../style/wiki.css";

class Wiki extends Component {

    constructor (props) {
        super(props);
        this.state = {
            queryTerm: ""
        }
    }

    handleInputChange = (evt) => {
        this.setState({
            queryTerm: evt.target.value
        });
    }

    render () {
        const { queryTerm } = this.state;
        return(
           <div id="wiki-box">
               <Header className="display-3" title="Wiki Api App"/>
               <Input
                type="text" 
                value={queryTerm} 
                changeValueHanler={this.handleInputChange}/>
                <WikiDisplay queryTerm={queryTerm}/>
           </div>
        );
    }
}

export default Wiki;