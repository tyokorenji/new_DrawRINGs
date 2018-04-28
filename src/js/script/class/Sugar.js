//@flow
"use strict";
import { Node } from "./Node";
import { Edge } from "./Edge";
import createjs from "createjs-easeljs";
import { getColor } from "../getColor";
import { searchRing } from "../searchRIng";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";

class Sugar extends Node{
    name: string;  //単糖の名前
    anomeric: string;  //アノマーの位置（"alpha α a" or "beta β b" or "open o" or "undefined"）
    isomer: string;  //構造異性体("L" or "D" or "undefined")
    ring: string;  //フラノースかピラノースか("pyranose p" or "furanose f" or "undefined")
    isomerShape: createjs.Text;  //isomerのcreatejs.Text
    ringShape: createjs.Text;  //ringのcreatejs.Text

    constructor(name: string){
        super();
        this.name = name;
        this.anomeric = "undefined";
        this.isomer = "undefined";
        this.ring = "undefined";
        this.isomerShape;
        this.ringShape;
    }

    getName(): string{
        return this.name;
    }

    getAnomeric(): string {
        return this.anomeric;
    }

    setAnomeric(anomeric: string) {
        this.anomeric = anomeric;
        return;
    }

    getIsomer(): string {
        return this.isomer;
    }

    setIsomer(isomer: string) {
        this.isomer = isomer;
        return;
    }

    getRing(): string {
        return this.ring;
    }

    setRing(ring: string) {
        this.ring = ring;
        return;
    }

    createIsomerShape() {
        if (this.isomer === SNFGSymbolGlycan[this.name].isomer) return;
        let shape = new createjs.Text(this.isomer, "bold 10px serif", getColor("black"));
        shape.textAlign = "right";  //水平方向(x軸)の位置
        shape.textBaseline = "middle";  //垂直方向(y軸)の位置
        shape.scaleX = 1.5;
        shape.scaleY = 1.5;
        this.isomerShape = shape;
        // return shape;
    }

    changeIsomerShape(isomer: string) {
        this.isomerShape.text = isomer;
    }

    //ringの文字の描画
    createRingShape() {
        let ringText: string = searchRing(this.ring);
        let SNFGRingText: string = searchRing(SNFGSymbolGlycan[this.name].ring);
        if(ringText === SNFGRingText) return;
        // if (ringText === "undefined") {
        //     return;
        // }
        let shape = new createjs.Text(ringText, "italic bold 12px serif", getColor("black"));
        shape.textAlign = "left;";  //水平方向(x軸)の位置
        shape.textBaseline = "middle";  //垂直方向(y軸)の位置
        shape.scaleX = 1.5;
        shape.scaleY = 1.5;
        this.ringShape = shape;
        // return shape;
    }

    changeRingSape(ring: string) {
        this.ringShape.text = ring;
    }

    highLight() {
        this.alpha = 0.5;
        this.graphics._stroke.style = getColor("red");
    }

    offLight() {
        this.alpha = 1.0;
        this.graphics._stroke.style = getColor("black");
    }

}

export { Sugar };