//@flow
"use strict";

import { nodeModeType } from "../react/nodeModeType";
import { liaise } from "./main";
import createjs from "createjs-easeljs";
import { Sugar } from "./class/Sugar";
import { getColor } from "./getColor";
import { getRelativeCoordinate } from "./getRelativeCoordinate";

export let createNodeShape = (shapeType: Symbol, event: Event): Function => {
    switch (shapeType) {
        case nodeModeType.HEXOSE:
            return createHexose(event);
        case nodeModeType.HEXNAC:
            createHexNAc(event);
            break;
        case nodeModeType.HEXOSAMINE:
            createHexosamine(event);
            break;
        case nodeModeType.HEXURONATE:
            createHexuronate(event);
            break;
        case nodeModeType.DEOXYHEXOSE:
            createDeoxyHexose(event);
            break;
        case nodeModeType.DEOXYHEXNAC:
            createDeoxyHexNAC(event);
            break;
        case nodeModeType.DI_DEOXYHEXOSE:
            createDi_DeoxyHexose(event);
            break;
        case nodeModeType.PENTOSE:
            createPentose(event);
            break;
        case nodeModeType.DEOXYNONULOSONATE:
            createDeoxynonulosonate(event);
            break;
        case nodeModeType.DI_DEOXYNONULOSONATE:
            createDi_Deoxynonulosonate(event);
            break;
        case nodeModeType.UNKNOWN:
            createUnknown(event);
            break;
        case nodeModeType.ASSIGNED:
            createAssigned(event);
            break;
        case nodeModeType.NOT_SELECTED:
            //未定義
            break;
        default:
            alert("ERROR!!!");
    }
};


let createHexose = (event: Event): Sugar => {
    let shape = new createjs.Shape();
        // let rect = new createjs.Graphics();

    // let shape: createjs.Shape = new createjs.Shape();
    let nodeName: string = "undefined";
    switch (liaise.nodeSelect){
        case nodeModeType.HEXOSE:
            shape.graphics.beginFill(getColor("white"));
            nodeName = "hexose";
            break;
        case nodeModeType.GLC:
            shape.graphics.beginFill(getColor("blue"));
            nodeName = "Glc";
            break;
        case nodeModeType.MAN:
            shape.graphics.beginFill(getColor("green"));
            nodeName = "Man";
            break;
        case nodeModeType.GAL:
            shape.graphics.beginFill(getColor("yellow"));
            nodeName = "Gal";
            break;
        case nodeModeType.GUL:
            shape.graphics.beginFill(getColor("orange"));
            nodeName = "Gul";
            break;
        case nodeModeType.ALT:
            shape.graphics.beginFill(getColor("pink"));
            nodeName = "Alt";
            break;
        case nodeModeType.ALL:
            shape.graphics.beginFill(getColor("purple"));
            nodeName = "All";
            break;
        case nodeModeType.TAL:
            shape.graphics.beginFill(getColor("light_blue"));
            nodeName = "Tal";
            break;
        case nodeModeType.IDO:
            shape.graphics.beginFill(getColor("brown"));
            nodeName = "Ido";
            break;
    }
    shape.graphics.beginStroke(getColor("black"));
    shape.graphics.setStrokeStyle(2);
    shape.graphics.drawCircle(0, 0, 10);
    
    // const shape = new createjs.Shape(rect);
    let coordinate: Array<Number> = getRelativeCoordinate(event);
    let sugar: Sugar = new Sugar(nodeName);
    liaise.stage.addChild(sugar);
    sugar.addChild(shape);
    sugar.x = coordinate[0];
    sugar.y = coordinate[1];
    liaise.stage.update();
    return sugar;
};

let createHexNAc = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.HEXNAC:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.GLCNAC:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.MANNAC:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.GALNAC:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.GULNAC:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.ALTNAC:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.ALLNAC:
            shape.graphics.beginFill(getColor("purple"));
            break;
        case nodeModeType.TALNAC:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.IDONAC:
            shape.graphics.beginFill(getColor("brown"));
            break;
    }
};

let createHexosamine = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.HEXOSAMINE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.GLCN:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.MANN:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.GALN:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.GULN:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.ALTN:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.ALLN:
            shape.graphics.beginFill(getColor("purple"));
            break;
        case nodeModeType.TALN:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.IDON:
            shape.graphics.beginFill(getColor("brown"));
            break;
    }
};

let createHexuronate = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.HEXURONATE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.GLCA:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.MANA:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.GALA:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.GULA:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.ALTA:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.ALLA:
            shape.graphics.beginFill(getColor("purple"));
            break;
        case nodeModeType.TALA:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.IDOA:
            shape.graphics.beginFill(getColor("brown"));
            break;
    }
};

let createDeoxyHexose = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.DEOXYHEXOSE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.QUI:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.RHA:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.D6GUL:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.D6ALT:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.D6TAL:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.FUC:
            shape.graphics.beginFill(getColor("red"));
            break;
    }

};

let createDeoxyHexNAC = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.DEOXYHEXNAC:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.QUINAC:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.RHANAC:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.D6ALTNAC:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.D6TALNAC:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.FUCNAC:
            shape.graphics.beginFill(getColor("red"));
            break;
    }
};

let createDi_DeoxyHexose = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.DI_DEOXYHEXOSE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.OLI:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.TYV:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.ABE:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.PAR:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.DIG:
            shape.graphics.beginFill(getColor("purple"));
            break;
        case nodeModeType.COL:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
    }
};

let createPentose = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.PENTOSE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.ARA:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.LYX:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.XYL:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.RIB:
            shape.graphics.beginFill(getColor("pink"));
            break;
    }
};

let createDeoxynonulosonate = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.DEOXYNONULOSONATE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.KDN:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.NEU5AC:
            shape.graphics.beginFill(getColor("purple"));
            break;
        case nodeModeType.NEU5GC:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.NEU:
            shape.graphics.beginFill(getColor("brown"));
            break;
        case nodeModeType.SIA:
            shape.graphics.beginFill(getColor("red"));
            break;
    }
};

let createDi_Deoxynonulosonate = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.DI_DEOXYNONULOSONATE:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.PSE:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.LEG:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.ACI:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.E4LEG:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
    }
};

let createUnknown = (event: Event): Sugar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.UNKNOWN:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.BAC:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.LDMANHEP:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.KDO:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.DHA:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.DDMANHEP:
            shape.graphics.beginFill(getColor("pink"));
            break;
        case nodeModeType.MURNAC:
            shape.graphics.beginFill(getColor("purple"));
            break;
        case nodeModeType.MURNGC:
            shape.graphics.beginFill(getColor("light_blue"));
            break;
        case nodeModeType.MUR:
            shape.graphics.beginFill(getColor("brown"));
            break;
    }
};

let createAssigned = (event: Event): SUgar => {
    let shape: createjs.Shape = new createjs.Shape();
    switch (liaise.nodeSelect) {
        case nodeModeType.ASSIGNED:
            shape.graphics.beginFill(getColor("white"));
            break;
        case nodeModeType.API:
            shape.graphics.beginFill(getColor("blue"));
            break;
        case nodeModeType.FRU:
            shape.graphics.beginFill(getColor("green"));
            break;
        case nodeModeType.TAG:
            shape.graphics.beginFill(getColor("yellow"));
            break;
        case nodeModeType.SOR:
            shape.graphics.beginFill(getColor("orange"));
            break;
        case nodeModeType.PSI:
            shape.graphics.beginFill(getColor("pink"));
            break;
    }
};
