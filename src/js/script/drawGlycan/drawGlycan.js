//@flow
"use strict";


import { Glycan } from "../class/Glycan";
import { Sugar } from "../class/Sugar";
import { glycans } from "../main";
import { recuversive_set_YLayer } from "./recuversiveSetYLayer";
import {basicData} from "../data/graphicsData";
import { culc_max_min_layer } from "./culcMaxMinLayer";
import { recuversiveSortChildSugar } from "../../recuversiveSortChildSugar";

export const drawGlycan = (glycan: Glycan) => {
    recuversiveSortChildSugar(glycan.getRootNode());
    recuversive_set_YLayer(glycan.getRootNode(), 1);
    let normalDistace: number = basicData.symbolDistance + basicData.symbolSize * 2;
    let glidEdgeLength: number = normalDistace + basicData.symbolSize * 2;
    let maxMinLayer: Array<number> = culc_max_min_layer(glycan);
    let alreadyDrawnGlycanLengths: Array<Object> = [];
    let newGlycanLength: Object = {
        minX: 10000000,
        maxX: 0,
        minY: 10000000,
        maxY: 0
    };
    for(let alreadyGlycan: Glycan of glycans) {
        let alreadyDrawnGlycanLength: Object = {
            minX: 10000000,
            maxX: 0,
            minY: 10000000,
            maxY: 0
        };
        alreadyDrawnGlycanLength = recuversiveCulcAlreadyGlycanArewaLength(alreadyGlycan.getRootNode(), alreadyDrawnGlycanLength);
        alreadyDrawnGlycanLengths.push(alreadyDrawnGlycanLength);
    }
    newGlycanLength = recuversiveCulcNewGlycanLength(glycan.getRootNode(), newGlycanLength);
    console.log("already area", alreadyDrawnGlycanLengths);
    console.log("new glycan area", newGlycanLength);



};
//DFS(深さ優先探索)で検索。非還元末端の一番上に来るノードのYLayerが0
const realCoordinateNewGlycanBox = () => {

};

const recuversiveCulcAlreadyGlycanArewaLength = (sugar: Sugar, glycanLength: Object): Object => {
    if(glycanLength.minX > sugar.getXCoord()) {
        glycanLength.minX = sugar.getXCoord();
    }
    if(glycanLength.maxX < sugar.getXCoord()) {
        glycanLength.maxX = sugar.getXCoord();
    }
    if(glycanLength.minY > sugar.getYCoord()) {
        glycanLength.minY = sugar.getYCoord();
    }
    if(glycanLength.maxY < sugar.getYCoord()) {
        glycanLength.maxY = sugar.getYCoord();
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        glycanLength = recuversiveCulcAlreadyGlycanArewaLength(child, glycanLength);
    }
    return glycanLength;
};

const recuversiveCulcNewGlycanLength = (sugar: Sugar, glycanLength: Object) => {
    console.log(sugar.getXLayer());
    let normalDistace: number = basicData.symbolDistance + basicData.symbolSize * 2;
    if(glycanLength.minX > (sugar.getXLayer() * normalDistace)) {
        glycanLength.minX = sugar.getXLayer() * normalDistace;
    }
    if(glycanLength.maxX < sugar.getXLayer() * normalDistace) {
        glycanLength.maxX = sugar.getXLayer() * normalDistace;
    }
    if(glycanLength.minY > sugar.getYLayer() * normalDistace) {
        glycanLength.minY = sugar.getYLayer() * normalDistace;
    }
    if(glycanLength.maxY < sugar.getYLayer() * normalDistace) {
        glycanLength.maxY = sugar.getYLayer() * normalDistace;
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        glycanLength = recuversiveCulcNewGlycanLength(child, glycanLength);
    }
    return glycanLength;
};



