//@flow
"use strict";

import { Glycan } from "../class/Glycan";
import { Sugar } from "../class/Sugar";
import {recuversive_set_YLayer} from "../drawGlycan/recuversiveSetYLayer";
import {basicData} from "../data/graphicsData";
import {culc_max_min_layer} from "../drawGlycan/culcMaxMinLayer";
import { culc_each_sugar_coordinate } from "./culcEachSugarCoordinate";
import { createSVGShape } from "./createSVGShape";
import { recuversiveSortChildSugar } from "../../recuversiveSortChildSugar";

export const createSVG = (glycan: Glycan) => {
    // glycan.getRootNode().sortChildSugar(glycan.getRootNode());
    // for (let child: Sugar of glycan.getRootNode().getChildSugars()) {
    //     child.sortChildSugar(child);
    // }
    recuversiveSortChildSugar(glycan.getRootNode());
    recuversive_set_YLayer(glycan.getRootNode(), 1);
    let normalDistace: number = basicData.symbolDistance + basicData.symbolSize * 2;
    let maxMinLayer: Array<number> = culc_max_min_layer(glycan);
    let viewBox: Array<number> = culcViewBox(maxMinLayer, normalDistace);
    culc_each_sugar_coordinate(glycan.getRootNode(), maxMinLayer, normalDistace);
    recuversiveCreateSVgShapeImport(glycan.getRootNode());
    let resultSVGShape: string = "<?xml version = \"1.0\"?><svg viewbox = \""+ String(viewBox[0])+ " " + String(viewBox[1]) + " " + String(viewBox[2]) + " " + String(viewBox[3]) + "\" xmlns=\"http://www.w3.org/2000/svg\">";
    resultSVGShape = bindLineSting(glycan.getRootNode(), resultSVGShape);
    resultSVGShape = bindSvgString(glycan.getRootNode(), resultSVGShape);
    resultSVGShape += "</svg>";
    console.log(resultSVGShape);
    downloadData(resultSVGShape);

};


const downloadData = (content: string) => {
    let day: Date = new Date();
    let fileName: string = window.prompt("Please input SVG file name", "" + day.getFullYear() + day.getMonth() + day.getDate() + String(day.getHours()) + String(day.getMinutes()) + String(day.getSeconds()));
    if(!fileName) {
        alert("cancel download.");
        return;
    }
    let mimetype: string = "image/svg+xml .svg";

    var url = (window.URL || window.webkitURL).createObjectURL(new Blob([content], { "type": mimetype }));
    var a = document.createElement("a");

    a.target = "_blank";
    a.download = fileName || "";
    a.href = url;

    a.click();
};

const recuversiveCreateSVgShapeImport = (sugar: Sugar) => {
    createSVGShape(sugar);
    for(let child: Sugar of sugar.getChildSugars()) {
        recuversiveCreateSVgShapeImport(child);
    }
};

const bindSvgString = (sugar: Sugar, resultShape: string): string => {
    resultShape += sugar.getSvgShape();
    for(let child: Sugar of sugar.getChildSugars()) {
        resultShape = bindSvgString(child, resultShape);
    }
    return resultShape;
};

const bindLineSting = (sugar: Sugar, resultShape: string): string => {
    if(sugar.hasParentBond()) {
        resultShape += sugar.getParentBond()[0].getSvgLineShape() + sugar.getParentBond()[0].getSvgTextShape();
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        resultShape = bindLineSting(child, resultShape);
    }
    return resultShape;
};

const culcViewBox = (maxMinLayer: Array<number>, normalDistance: number): Array<number> => {
    let viewBox: Array<number> = [0, 0];  //[x, y, 横の長さ, 縦の長さ]
    viewBox.push((maxMinLayer[0] - maxMinLayer[1] + 1) * normalDistance);
    viewBox.push((maxMinLayer[2] - maxMinLayer[3] + 1) * normalDistance);
    return viewBox;
};

// {/*<?xml version="1.0"?>*/}
//     {/*<svg viewbox="0 0 400 860" xmlns="http://www.w3.org/2000/svg">*/}
//         {/*<script type="text/ecmascript">*/}
//     {/*<![CDATA[*/}
//
//             {/*window.onload=function () {*/}
//                 {/*var sugarNode = document.getElementsByClassName("sugar");*/}
//                 {/*for (var i = 0; i < sugarNode.length; i++) {*/}
//                     {/*sugarNode[i].addEventListener('click', mClick, false);*/}
//                 {/*}*/}
//             {/*}*/}
//
//             {/*function mClick() {*/}
//                 {/*var useExternalMethod = document.getElementById("extFlag").getAttribute("value");*/}
//                 {/*if (useExternalMethod == "0") {*/}
//                     {/*// perform the function that is appropriate for an isolated svg file (in this examle, go to pubchem)*/}
//                     {/*var nodeName = this.getAttribute("sugarName");*/}
//                     {/*window.open("https://pubchem.ncbi.nlm.nih.gov/compound/" + nodeName)*/}
//                 {/*}*/}
//             {/*}*/}
//
//     {/*]]>*/}
//   {/*</script>*/}
//
//         {/*<desc value="0" id="extFlag"/>*/}
//
//         {/*<line class="bond" stroke="black" x1="780" y1="220" x2="720" y2="220" nodeIndex="1"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="750" y="210" nodeIndex="1">&#x3b2;4</text>*/}
//         {/*<line class="bond" stroke="black" x1="720" y1="220" x2="660" y2="220" nodeIndex="2"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="690" y="210" nodeIndex="2">&#x3b2;4</text>*/}
//         {/*<line class="bond" stroke="black" x1="660" y1="220" x2="600" y2="295" nodeIndex="3"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="621" y="251.5" nodeIndex="3">&#x3b1;3</text>*/}
//         {/*<line class="bond" stroke="black" x1="600" y1="295" x2="540" y2="320" nodeIndex="4"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="565" y="298.5" nodeIndex="4">&#x3b2;2</text>*/}
//         {/*<line class="bond" stroke="black" x1="540" y1="320" x2="480" y2="320" nodeIndex="5"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="510" y="310" nodeIndex="5">&#x3b2;4</text>*/}
//         {/*<line class="bond" stroke="black" x1="600" y1="295" x2="540" y2="270" nodeIndex="6"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="575" y="273.5" nodeIndex="6">&#x3b2;4</text>*/}
//         {/*<line class="bond" stroke="black" x1="540" y1="270" x2="480" y2="270" nodeIndex="7"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="510" y="260" nodeIndex="7">&#x3b2;4</text>*/}
//         {/*<line class="bond" stroke="black" x1="660" y1="220" x2="600" y2="145" nodeIndex="8"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="639" y="176.5" nodeIndex="8">&#x3b1;6</text>*/}
//         {/*<line class="bond" stroke="black" x1="600" y1="145" x2="540" y2="170" nodeIndex="9"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="565" y="148.5" nodeIndex="9">&#x3b2;2</text>*/}
//         {/*<line class="bond" stroke="black" x1="540" y1="170" x2="540" y2="220" nodeIndex="10"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="528" y="195" nodeIndex="10">&#x3b1;3</text>*/}
//         {/*<line class="bond" stroke="black" x1="540" y1="170" x2="480" y2="170" nodeIndex="11"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="510" y="160" nodeIndex="11">&#x3b2;4</text>*/}
//         {/*<line class="bond" stroke="black" x1="600" y1="145" x2="540" y2="120" nodeIndex="12"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="575" y="123.5" nodeIndex="12">&#x3b2;6</text>*/}
//         {/*<line class="bond" stroke="black" x1="540" y1="120" x2="480" y2="120" nodeIndex="13"></line>*/}
//         {/*<text class="sText" text-anchor="middle" dominant-baseline="central" x="510" y="110" nodeIndex="13">&#x3b2;4</text>*/}
//         {/*<rect class="sugar" width="24" height="24" x="768" y="208" fill="#0090BC" stroke="black" sugarName="GlcNAc" nodeIndex="0"></rect>*/}
//         {/*<rect class="sugar" width="24" height="24" x="708" y="208" fill="#0090BC" stroke="black" sugarName="GlcNAc" nodeIndex="1"></rect>*/}
//         {/*<circle class="sugar" r="12" cx="660" cy="220" fill="#00A651" stroke="black" sugarName="Man" nodeIndex="2"></circle>*/}
//         {/*<circle class="sugar" r="12" cx="600" cy="295" fill="#00A651" stroke="black" sugarName="Man" nodeIndex="3"></circle>*/}
//         {/*<rect class="sugar" width="24" height="24" x="528" y="308" fill="#0090BC" stroke="black" sugarName="GlcNAc" nodeIndex="4"></rect>*/}
//         {/*<circle class="sugar" r="12" cx="480" cy="320" fill="#FFD400" stroke="black" sugarName="Gal" nodeIndex="5"></circle>*/}
//         {/*<rect class="sugar" width="24" height="24" x="528" y="258" fill="#0090BC" stroke="black" sugarName="GlcNAc" nodeIndex="6"></rect>*/}
//         {/*<circle class="sugar" r="12" cx="480" cy="270" fill="#FFD400" stroke="black" sugarName="Gal" nodeIndex="7"></circle>*/}
//         {/*<circle class="sugar" r="12" cx="600" cy="145" fill="#00A651" stroke="black" sugarName="Man" nodeIndex="8"></circle>*/}
//         {/*<rect class="sugar" width="24" height="24" x="528" y="158" fill="#0090BC" stroke="black" sugarName="GlcNAc" nodeIndex="9"></rect>willie5151*/}
//
//         {/*<polygon class="sugar" points="528,232 552,232 540,208" fill="#ED1C24" stroke="black" sugarName="Fuc" nodeIndex="10"></polygon>*/}
//         {/*<circle class="sugar" r="12" cx="480" cy="170" fill="#FFD400" stroke="black" sugarName="Gal" nodeIndex="11"></circle>*/}
//         {/*<rect class="sugar" width="24" height="24" x="528" y="108" fill="#0090BC" stroke="black" sugarName="GlcNAc" nodeIndex="12"></rect>*/}
//         {/*<circle class="sugar" r="12" cx="480" cy="120" fill="#FFD400" stroke="black" sugarName="Gal" nodeIndex="13"></circle>*/}
//
//
//     {/*</svg>*/}
