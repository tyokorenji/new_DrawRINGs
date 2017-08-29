"use strict";

import React from "react";
import { Image, Popup } from "semantic-ui-react";

export class ImageWrap extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
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
                "backgroundColor": "rgba(255, 0, 0, 1.0)"
            };
        }

        const imageElement = (
            <Image id = {this.props.id}
                src = {this.props.image}
                {...imageProps}
            />
        );
        return (
            <Popup
                trigger= { imageElement }
                content = { this.props.content }
                on = "hover"
                hideOnScroll
            />
        );
    }
}