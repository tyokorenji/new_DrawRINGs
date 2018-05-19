//@flow
"use strict";
import { Node } from "./Node";
import { Edge } from "./Edge";
import createjs from "createjs-easeljs";
import { getColor } from "../data/getColor";
import { searchRing } from "../searchRIng";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";
import { liaise } from "../main";
import { Glycan } from "./Glycan";
import { RepeatBracket } from "./RepeatBracket";
import { Cyclic } from "./Cyclic";

class Sugar extends Node{
    name: string;  //単糖の名前
    anomeric: string;  //アノマーの位置（"alpha α a" or "beta β b" or "open o" or "undefined"）
    isomer: string;  //構造異性体("L" or "D" or "undefined")
    ring: string;  //フラノースかピラノースか("pyranose p" or "furanose f" or "undefined")
    isomerShape: createjs.Text;  //isomerのcreatejs.Text
    ringShape: createjs.Text;  //ringのcreatejs.Text
    glycan: Glycan;  //Sugarが所属するGlycanオブジェクト
    repeatBracket: RepeatBracket;  //繰り返しのstartNodeの時、Bracketを持つ
    cyclic: Cyclic; //その糖鎖がCyclic構造を形成する単糖で、非還元末端側の場合

    constructor(name: string){
        super();
        this.name = name;
        this.anomeric = "undefined";
        this.isomer = "undefined";
        this.ring = "undefined";
        this.isomerShape;
        this.ringShape;
        this.glycan;
        this.cyclic;
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

    //単糖の座標設定
    setCoordinate(x: number, y: number) {
        this.xCoord = x - (x % 10);
        this.yCoord = y - (y % 10);
        this.x = x - (x % 10);
        this.y = y - (y % 10);
    }

    setGlycan(glycan: Glycan) {
        this.glycan = glycan;
        return;
    }

    getGlycan(): Glycan {
        return this.glycan;
    }

    setRepeatBracket(repeatBracket: RepeatBracket) {
        this.repeatBracket = repeatBracket;
        return;
    }

    getRepeatBracket(): RepeatBracket {
        return this.repeatBracket;
    }

    setCyclic(cyclic: Cyclic) {
        this.cyclic = cyclic;
        return;
    }
    getCyclic(): Cyclic {
        return this.cyclic;
    }
    hasCyclic(): boolean {
        if (this.cyclic === new Cyclic()) return false;
        else return true;
    }


}

export { Sugar };