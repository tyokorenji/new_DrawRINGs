//@flow
"use strict";

import {FragmentBracket} from "../class/FragmentBracket";
import {Sugar} from "../class/Sugar";
import { basicData } from "../data/graphicsData";
import {Fragment} from "../class/Fragment";

export const createSVGFragmentsBracket = (bracket: FragmentBracket) => {
    let nonReductionSguars: Array<Sugar> = [];
    let rootNodes: Array<Sugar> = [];
    let bracketCoordObj: Object = {};
    for(let fragment: Fragment of bracket.getChildGlycans()) {
        rootNodes.push(fragment.getRootNode());
    }
    if(bracket.isEmptyParentGlycan()) {
        nonReductionSguars = bracket.getParentSugars();
        bracketCoordObj = culcMaxMinCoord(nonReductionSguars, rootNodes);
    }
    else {
        nonReductionSguars = bracket.getParentGlycanNonReductionSguars();
        bracketCoordObj = culcMaxMinCoord(nonReductionSguars, rootNodes);
    }
    bracket.setSVGShape(createSVG(bracketCoordObj));


};

const createSVG = (bracketCoordObj: Object): string => {
    console.log("gmkangahgjhoaugnlakjhe", bracketCoordObj);
    let SVGShape: string = "<path d = \"M " + String(bracketCoordObj["top"][0] + basicData.symbolSize * 1.5) + " " + String(bracketCoordObj["top"][1] - basicData.symbolSize) + " Q " + String(bracketCoordObj["top"][0]) + " " + String(bracketCoordObj["top"][1] - basicData.symbolSize) + " " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1] - basicData.symbolSize) + " Q " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1]) + " " + String(bracketCoordObj["center"][0] - basicData.symbolDistance / 2)  + " " + String(bracketCoordObj["center"][1]) +
        " Q " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1]) + " " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1] + basicData.symbolDistance / 1.5) + " Q " + String(bracketCoordObj["bottom"][0]) + " " + String(bracketCoordObj["bottom"][1] + basicData.symbolSize) +
        " " + String(bracketCoordObj["bottom"][0] + basicData.symbolSize * 1.5) + " " + String(bracketCoordObj["bottom"][1]+ basicData.symbolSize) + "\" stroke=\"black\" fill=\"none\" stroke-width=\"5\"/>";
    return SVGShape;
};

const culcMaxMinCoord = (nonReductionSguars: Array<Sugar>, fragmentRootNodes): Object => {
    let reduc_maxY: number = 0;
    let reduc_minY: number = 100;
    let root_maxY: number = 0;
    let root_minY: number = 100;
    let topY: number;
    let bottomY: number;
    let X: number;
    for(let reduct: Sugar of nonReductionSguars) {
        if(reduc_maxY < reduct.getSvgYCoord()) reduc_maxY = reduct.getSvgYCoord();
        if(reduc_minY > reduct.getSvgYCoord()) reduc_minY = reduct.getSvgYCoord();
    }
    for(let fraRoot: Sugar of fragmentRootNodes) {
        if(root_maxY < fraRoot.getSvgYCoord()) root_maxY = fraRoot.getSvgYCoord();
        if(root_minY > fraRoot.getSvgYCoord()) root_minY = fraRoot.getSvgYCoord();
    }
    if((reduc_maxY - reduc_minY) > (root_maxY - root_minY)) {
        topY = reduc_maxY;
        bottomY = reduc_minY;
    }
    else {
        topY = root_maxY;
        bottomY = root_minY;
    }
    X = nonReductionSguars[0].getSvgXCoord() - fragmentRootNodes[0].getSvgXCoord();
    let centerY: number = (topY + bottomY) / 2;
    return {"top": [X, bottomY - basicData.symbolSize],
        "bottom": [X, topY + basicData.symbolSize],
        "center": [X, centerY]};
};