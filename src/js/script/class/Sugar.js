//@flow
"use strict";
import { Node } from "./Node";
import { Edge } from "./Edge";
import createjs from "createjs-easeljs";
import { getColor } from "../data/getColor";
import { searchRing } from "../searchRIng";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";
import { liaise } from "../main";

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

    //ringの変更時、ringShapeの内容を変更する
    changeRingSape(ring: string) {
        this.ringShape.text = ring;
    }

    //nodeShpaのハイライト
    highLight() {
        this.children[0].alpha = 0.5;
        this.children[0].graphics._stroke.style = getColor("red");
        liaise.stage.update();
    }

    //nodeShpaのオフライト
    offLight() {
        this.children[0].alpha = 1.0;
        this.children[0].graphics._stroke.style  = getColor("black");
        liaise.stage.update();
    }

    //nodeがハイライトされているかを判別
    checkHighLight(): boolean {
        switch (this.children[0].alpha) {
            case 0.5:
                return true;
            default:
                return false;
        }
    }

}

export { Sugar };