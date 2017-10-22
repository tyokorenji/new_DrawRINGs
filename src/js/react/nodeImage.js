"use strict";

import React from "react";
import { Image } from "semantic-ui-react";

export class NodeImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const imageProps = this.props.defStyle;

        if (this.props.selected) {
            imageProps.style = {
                "backgroundColor": "rgba(255, 0, 0, 1.0)",
                "opacity": "0.5",
                "border": "5px solid"
            };
        }
        else {
            imageProps.style = {

            };
        }

        return (
            <div>
                <Image src = {this.props.image} size = "mini" id = { this.props.id } {...imageProps}/>
                <br/>
                <p id = { this.props.id } >{ this.props.id }</p>
            </div>
        );
    }
}