//@flow
"use strict";

import { nodeModeType } from "../../react/nodeModeType";
import { Sugar } from "../class/Sugar";
import { createHexose } from "./createHexose";
import { createError } from "./createError";
import { createHexNAc } from "./createHexNAc";
import { createHexosamine } from "./createHexosamine";
import { createHexuronate } from "./createHexuronate";
import { createDeoxyHexose } from "./createDeoxyHexose";
import { createDeoxyHexNAc } from "./createDeoxyHexNAc";
import { createDi_DeoxyHexose } from "./createDi_DeoxyHexose";
import { createPentose } from "./createPentose";
import { createDeoxynonulosonate } from "./createDeoxynonulosonate";
import { createDi_Deoxynonulosonate } from "./createDi_Deoxynonulosonate";
import { createUnknown } from "./createUnknown";
import { createAssigned } from "./createAssigned";
import { createUndefSNFG } from "./createUndefSNFG";
// import { getRelativeCoordinate } from "../getRelativeCoordinate";
import { SNFGSymbolGlycan } from "../data/SNFGGlycanTable";
import {liaise} from "../main";
import createjs from "createjs-easeljs";
import {getColor} from "../data/getColor";
import { basicData } from "../data/graphicsData";
import { UndefSugar } from "../class/UndefSugar";


export let createNodeShape: Function = (shapeType: Symbol, event: Event, isomerFlag: boolean, ringFlag: boolean, backboneFlag: boolean): Function => {
    let symbolSize: number = basicData.symbolSize;
    let sugarObject: Object;

    switch (shapeType) {
        case nodeModeType.HEXOSE: {
            sugarObject = createHexose(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.HEXNAC:{
            sugarObject = createHexNAc(liaise.nodeSelect, symbolSize);
            break;
        }

        case nodeModeType.HEXOSAMINE: {
            sugarObject= createHexosamine(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.HEXURONATE: {
            sugarObject= createHexuronate(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.DEOXYHEXOSE: {
            sugarObject= createDeoxyHexose(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.DEOXYHEXNAC: {
            sugarObject= createDeoxyHexNAc(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.DI_DEOXYHEXOSE: {
            sugarObject= createDi_DeoxyHexose(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.PENTOSE: {
            sugarObject= createPentose(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.DEOXYNONULOSONATE: {
            sugarObject= createDeoxynonulosonate(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.DI_DEOXYNONULOSONATE: {
            sugarObject= createDi_Deoxynonulosonate(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.UNKNOWN: {
            sugarObject= createUnknown(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.ASSIGNED: {
            sugarObject= createAssigned(liaise.nodeSelect, symbolSize);
            break;
        }
        case nodeModeType.NOT_SELECTED: {
            //未定義
            sugarObject= createUndefSNFG(symbolSize  + 10);
            break;
        }
        default: {
            return createError();
        }
    }
    switch(shapeType) {
        case nodeModeType.NOT_SELECTED: {
            let undefSugar: UndefSugar = new UndefSugar(sugarObject.nodeName);
            undefSugar.setIsomer(liaise.undefNodeSelect.isomer);
            undefSugar.setRing(liaise.undefNodeSelect.ring);
            undefSugar.setCarbBone(liaise.undefNodeSelect.backbone);
            undefSugar.addChild(sugarObject.rect);
            undefSugar.addChild(sugarObject.shape);
            liaise.stage.addChild(undefSugar);
            return undefSugar;

        }
        default: {
            let sugar = new Sugar(sugarObject.nodeName);
            let isomerTextShape: createjs.Text;
            let ringTextShape: createjs.Text;
            if(isomerFlag) {
                isomerTextShape = createDifIsomer();
                sugar.setIsomer(liaise.undefNodeSelect.isomer.toUpperCase());
            }
            else {
                isomerTextShape = new createjs.Text("", "bold" + basicData.isomerSize + "px serif", getColor("black"));
                sugar.setIsomer(SNFGSymbolGlycan[sugarObject.nodeName].isomer);
            }
            if(ringFlag) {
                ringTextShape = createDifRing();
                sugar.setRing(liaise.undefNodeSelect.ring.toLowerCase());

            }
            else {
                ringTextShape = new createjs.Text("", "bold" + basicData.isomerSize + "px serif", getColor("black"));
                sugar.setRing(SNFGSymbolGlycan[sugarObject.nodeName].ring);
            }
            if(backboneFlag) {
                sugar.setCarbBone(liaise.undefNodeSelect.backbone);
            }
            else {
                sugar.setCarbBone(SNFGSymbolGlycan[sugarObject.nodeName].carbBone);
            }
            sugar.addChild(sugarObject.shape);
            sugar.addChild(isomerTextShape);
            sugar.addChild(ringTextShape);

            liaise.stage.addChild(sugar);

            return sugar;
        }
    }

};

let createDifIsomer = (): createjs.Text => {
    let Text: createjs.Text = new createjs.Text(liaise.undefNodeSelect.isomer.toUpperCase(), basicData.isomerSize + "px serif", getColor("black"));
    console.log(Text);
    Text.textAlign = "right";
    Text.textBaseline = "middle";  //垂直方向(y軸)の位置
    Text.scaleX = 1.0;
    Text.scaleY = 1.0;
    // Text.x = Text.getMeasuredWidth() / 2;
    // Text.y = Text.getMeasuredHeight() / 2;
    return Text;
};

let createDifRing = (): createjs.Text => {
    let ringText: string;
    if(liaise.undefNodeSelect.ring.toLowerCase() === "p"  || liaise.undefNodeSelect.ring.toLowerCase() === "pyranose") {
        ringText = "p";
    }
    else if(liaise.undefNodeSelect.ring.toLowerCase() === "f"  || liaise.undefNodeSelect.ring.toLowerCase() === "furanose") {
        ringText = "f";
    }
    let Text: createjs.Text = new createjs.Text(ringText, basicData.ringSize + "px serif", getColor("black"));
    Text.textAlign = "left";
    Text.textBaseline = "middle";  //垂直方向(y軸)の位置
    Text.scaleX = 1.0;
    Text.scaleY = 0.8;
    // Text.x = Text.getMeasuredWidth() / 2;
    Text.y = Text.getMeasuredHeight() / 2.5;
    return Text;
};