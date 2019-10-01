import React, { Component } from "react";

class RenderIf extends Component {
    
    render () {
        const { shouldRender } = this.props;
        return(
            <div>
                { shouldRender && this.props.children }
            </div>
        );
    }
};

export default RenderIf;