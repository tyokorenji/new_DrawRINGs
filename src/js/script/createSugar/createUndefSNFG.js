//@flow
"use stric";

import { getColor } from "../data/getColor";
import { liaise } from "../main";
import createjs from "createjs-easeljs";
import {modeType} from "../../react/modeType";

export let createUndefSNFG = (symbolName: string, symbolSize: number): Object => {
    switch(liaise.modeType) {
        case modeType.Node: {
            let shape: createjs.Text = new createjs.Text(liaise.undefNodeSelect.name, symbolSize + "px serif", getColor("black"));
            let rect: createjs.Shape = new createjs.Shape();
            rect.graphics.beginStroke(getColor("white"));
            rect.graphics.setStrokeStyle(2);
            rect.graphics.beginFill(getColor("white"))
                .drawRect(0, 0, shape.getMeasuredWidth(), shape.getMeasuredHeight());

            return {shape: shape, rect: rect, nodeName: liaise.undefNodeSelect.name};
        }
        case modeType.COMPOSITION: {
            let shape: createjs.Text = new createjs.Text(symbolName, symbolSize + "px serif", getColor("black"));
            let rect: createjs.Shape = new createjs.Shape();
            rect.graphics.beginStroke(getColor("white"));
            rect.graphics.setStrokeStyle(2);
            rect.graphics.beginFill(getColor("white"))
                .drawRect(0, 0, shape.getMeasuredWidth(), shape.getMeasuredHeight());

            return {shape: shape, rect: rect, nodeName: symbolName};
        }
        default: {
            return {};
        }
    }

};