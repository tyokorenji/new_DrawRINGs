"use strict";

import React from "react";
import ReactDOM from "react-dom";
import createjs from "createjs-easeljs";

export class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        this.stage = new createjs.Stage(canvas);
        let rect = new createjs.Graphics();
        rect.beginFill("red");
        rect.drawRect(10, 10, 10, 10);
        const shape = new createjs.Shape(rect);

        this.stage.addChild(shape);
        this.stage.update();
    }

    render() {
        const defStyle = {
            width: "10000px",
            height: "10000px",
            border: "1px solid gray",
            overflow: "scroll"
        };
        return (
            <canvas ref = "canvas"
                style = { defStyle }></canvas>
        );
    }
}