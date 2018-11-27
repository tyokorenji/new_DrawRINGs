//@flow
"use strict";

import { Sugar } from "../class/Sugar";
import { nodeModeSearch, nodeType, getSymbolColor} from "../../react/nodeModeSearch";
import { basicData } from "../data/graphicsData";
import { nodeModeType } from "../../react/nodeModeType";
import {getColor} from "../data/getColor";
import {Glycobond} from "../class/Glycobond";

export const createSVGShape = (sugar: Sugar) => {
    let shapeSymbol: Symbol = nodeModeSearch(sugar.getName());
    let shapeType: Symbol = nodeType(shapeSymbol);
    sugar.setSvgShape(createSVGNodeSymbol(sugar, shapeType, shapeSymbol));
    if(sugar.hasParentBond()) {
        if(!sugar.getParentBond()[0].isEmptyParentSugar()) {
            createParentBonSVGLineText(sugar.getParentBond()[0]);
        }
    }

};

const createParentBonSVGLineText = (bind: Glycobond) => {
    let anomeric: string = "?";
    let parentPosition: string = "?";
    let parentX: number = bind.getParentSugar().getSvgXCoord();
    let parentY: number = bind.getParentSugar().getSvgYCoord();
    let childX: number = bind.getChildSugar().getSvgXCoord();
    let childY: number = bind.getChildSugar().getSvgYCoord();
    if(bind.hasChildAnomeric()) anomeric = bind.getChildAnomeric();
    if(bind.hasParentPosition()) parentPosition = bind.getParentPosition();
    let lineText: string = "<line stroke =\"black\" x1 = \"" +parentX + "\" y1 = \"" + parentY + "\" x2 = \"" + childX+ "\" y2 = \"" + childY + "\" nodeIndex=\"1\"></line>";
    let text: string = "";
    if(parentY > childY) {
        text = "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + ((parentX + childX) / 2 + basicData.svgLinkageUp) + "\" y = \"" + ((parentY + childY) / 2 + basicData.svgLinkagedown) + "\" >" + anomeric + parentPosition + "</text>";
    }
    else if(parentY < childY){
        text = "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + ((parentX + childX) / 2 + basicData.svgLinkageUp) + "\" y = \"" + ((parentY + childY) / 2 + basicData.svgLinkageUp) + "\" >" + anomeric + parentPosition + "</text>";
    }
    else {
        text = "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + (parentX + childX) / 2 + "\" y = \"" + ((parentY + childY) / 2 + basicData.svgLinkagedown) + "\" >" + anomeric + parentPosition + "</text>";

    }
    bind.setSvgLineShape(lineText);
    bind.setSvgTextShape(text);
};

const createSVGNodeSymbol = (sugar: Sugar, shapeType: Symbol, shapeSymbol: Symbol): string => {
    let color: string = getSymbolColor(shapeSymbol);
    let subColor: string = getColor("white");
    let exColorShape: boolean = exColor(shapeSymbol);
    if(exColorShape) {
        let A: string = color;
        color = subColor;
        subColor = A;
    }

    let scale: number = basicData.symbolSize;
    let width_size: number = 0.1;
    let x: number = sugar.getSvgXCoord();
    let y: number = sugar.getSvgYCoord();

    if (shapeType === nodeModeType.HEXOSE) {
        return "<circle cx = \"" + String(x) + " \" cy = \" " + String(y) + "\" r = \" " + String(scale) + " \" stroke-width = \" " + String(0.1 * scale) + " \" stroke = \"black\" fill = \" " + color + " \"/>";
    }
    else if (shapeType === nodeModeType.HEXNAC) {
        return "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(2 * scale) + "\" stroke = \"black\" stroke-width = \"" + String( 0.1 * scale ) + "\" fill = \"" + color + "\"/>";
    }
    else if (shapeType === nodeModeType.HEXOSAMINE) {
        return "<rect x = \"" + String(x - scale)  + "\" y = \"" + String(y - scale)  + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(2 * scale)  + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + getColor("white") + "\"/>" +
            "<polygon points = \"" + String(x - scale) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(width_size * scale) + "\" fill = \"" + color + "\"/>" +
            "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(2 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>";
    }
    else if (shapeType === nodeModeType.HEXURONATE) {
        return "<polygon points =\"" + String(x) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + subColor + "\"/>" +
            "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + color + "\"/>" +
            "<polygon points = \"" + String(x) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y) + "," + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>" +
            "<polygon points = \"" + String(x - scale) + "," + String(y) + "," + String(x + scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>";
    }
    else if (shapeType === nodeModeType.DEOXYHEXOSE){
        return "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
    }
    else if (shapeType === nodeModeType.DEOXYHEXNAC){
        return "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + getColor("white") + "\"/>" +
            "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y + scale) + "," + String(x) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(width_size * scale) + "\" fill = \"" + color + "\"/>" +
            "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>";
    }
    else if (shapeType === nodeModeType.DI_DEOXYHEXOSE) {
        return "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale / 2) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
    }
    else if (shapeType === nodeModeType.PENTOSE) {
        return "<polygon points = \"" + String(x) + "," + String(y - 0.7 * scale * 2) + "," + String(x - 0.205 * scale * 2) + "," + String(y - 0.283 * scale * 2) + "," + String(x - 0.665 * scale * 2) + "," + String(y - 0.216 * scale * 2) + "," + String(x - 0.332 * scale * 2) + "," + String(y + 0.108 * scale * 2) + "," + String(x - 0.411 * scale * 2) + "," + String(y + 0.566 * scale * 2) + "," + String(x) + "," + String(y + 0.35 * scale * 2) + "," + String(x + 0.411 * scale * 2) + ","+ String( y + 0.566 * scale * 2) + ","+ String(x + 0.332 * scale * 2) + ","+ String(y + 0.108 * scale * 2) + ","+ String(x + 0.665 * scale * 2) + ","+ String(y - 0.216 * scale * 2) + ","+ String(x + 0.205 * scale * 2) + ","+ String(y - 0.283 * scale * 2) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\" />";
    }
    else if (shapeType === nodeModeType.DEOXYNONULOSONATE) {
        return "<polygon points = \"" + String(x) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y) + "," + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
    }
    else if (shapeType === nodeModeType.DI_DEOXYNONULOSONATE){
        return "<polygon points = \"" + String(x) + ","+ String(y + 0.5* scale) + ","+ String(x +  scale) + ","+ String(y) + ","+ String(x) + ","+ String(y - 0.5 * scale) + ","+ String(x - scale) + ","+ String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color+ "\"/>";
    }
    else if (shapeType === nodeModeType.UNKNOWN) {
        return "<polygon points = \"" + String(x - 0.8 * scale) + "," + String(y) + "," + String(x - 0.6 * scale) + "," + String(y - 0.5 * scale) + "," + String(x + 0.6 * scale) + "," + String(y - 0.5 * scale) + "," + String(x + 0.8 * scale) + "," + String(y) + "," + String(x + 0.6 * scale) + "," + String(y + 0.5 * scale) + "," + String(x - 0.6 * scale) + "," + String(y + 0.5 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
    }
    else if (shapeType === nodeModeType.ASSIGNED) {
        return "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - 0.75 * scale) + "," + String(y - 0.25 * scale) + "," + String(x - 0.5 * scale) + "," + String(y + 0.75 * scale) + "," + String(x + 0.5 * scale) + "," + String(y + 0.75 * scale) + "," + String(x + 0.75 * scale) + "," + String(y - 0.25 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
    }
    else {
        return "";
    }
};

const exColor = (shapeSymbol: Symbol): boolean => {
    switch(shapeSymbol) {
        case nodeModeType.ALTA:
        case nodeModeType.IDOA:
            return true;
        default: return false;
    }
};