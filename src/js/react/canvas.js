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
        canvas.width = 5000;
        canvas.height = 5000;
        this.stage = new createjs.Stage(canvas);
        let rect = new createjs.Graphics();
        rect.beginFill("red");
        console.log(canvas.width);
        console.log(canvas.height);
        rect.drawRect(10, 10, 20, 20);
        const shape = new createjs.Shape(rect);

        this.stage.addChild(shape);
        this.stage.update();
    }

    render() {
        const defStyle = {
            width: "5000px",
            height: "5000px",
            border: "1px solid gray",
            overflow: "scroll"
        };
        return (
            <canvas ref = "canvas"
                style = { defStyle }></canvas>
        );
    }
}