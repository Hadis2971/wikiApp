import React, { Component } from "react";

import WikiDataList from "./wikiDataList";
import RenderIf from "../shared/renderIf";
import Button from "../shared/button";
import Header from "../shared/header";
import network from "../../network";

class WikiDisplay extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showError: false,
            errorMsg: "",
            wikidResponseData: {}
        }
    }

    _normalizeInput = (str) => {
        return str
                .split(" ")
                .map(s => (s.charAt(0).toUpperCase() + s.slice(1, str.length)))
                .join("_");
    };


    _validate = (queryTerm) => {
        if(!queryTerm) {
            this.setState({ showError: true, errorMsg: "Please Enter A Value" });
            return false;
        }
        if(!/^[a-zA-Z0-9\s]+$/.test(queryTerm)) {
            this.setState({ showError: true, errorMsg: "Only Letters Spaces & Numbers are Allowed" });
            return false;
        }
        return true;
    };

    _checkWikiData = (wikiData) => {
        if(!Object.keys(wikiData.data).length) {
            this.setState({ showError: true, errorMsg: "No Data Found" });
            return false;
        }
        return true;
    };


    _fetchWikiData = async (normalizedQueryString) => {
        try {
            const url = `http://dbpedia.org/data/${normalizedQueryString}.json`
            const wikiData = await network.get(url);
            const isDataValid = this._checkWikiData(wikiData);
            if(isDataValid) {
                this.setState({ showError: false, wikidResponseData: wikiData.data });
                console.log(wikiData);
            }
        } catch (error) {
            alert("Something Went Wrong Try Again!!!");
            console.log(`Api Error => ${error}`);
        }
    };

    startFetchWikiData = () => {
        const { queryTerm } = this.props;
        const valid = this._validate(queryTerm);
        if(valid) {
            const normalizedQueryTerm = this._normalizeInput(queryTerm);
            this._fetchWikiData(normalizedQueryTerm);
        }
    };

    render () {
        const { errorMsg, showError, wikidResponseData } = this.state;
        return (
            <>
               <Button 
                 className="btn btn-block btn-primary"
                 title="Click"
                 buttonFunctionality={this.startFetchWikiData}/>
               <RenderIf shouldRender={showError}>
                    <Header 
                     className="display-4"
                     style={{color: "red"}} 
                     title={errorMsg}/>
                </RenderIf>
                <WikiDataList
                  classNameUL="list-group" 
                  classNameLI="list-group-item"
                  data={wikidResponseData}/>
            </>
        );
    }
};

export default WikiDisplay;
