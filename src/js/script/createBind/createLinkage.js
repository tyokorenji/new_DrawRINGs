//@flow
"use strict";

import { linkageData } from "../data/linkageData";
import createjs from "createjs-easeljs";
import { getColor } from "../data/getColor";
import { basicData } from "../data/graphicsData";
import { Glycobond } from "../class/Glycobond";
import { Fragment } from "../class/Fragment";

export function createLinkage(target: Glycobond, linkage: string) {
    target.setChildPosition(linkageData[linkage].childPosition);
    target.setParentPositon(linkageData[linkage].parentPosition);
    target.setChildAnomeric(linkageData[linkage].anomeric);
    target.setLinkageType(linkage);
    let middleCoordinate = target.calcMiddleCoordinate();
    let quarterCoordinates = target.calcQuaterCoordinate(middleCoordinate);
    let parentQuarterCoordinate = quarterCoordinates[0];
    let childQuarterCoordinate = quarterCoordinates[1];
    let parentShape = new createjs.Text(target.getParentPosition(), basicData.linkageSize + "px serif", getColor("black"));
    let childShape = new createjs.Text(target.childAnomeric, basicData.linkageSize + "px serif", getColor("black"));
    console.log(target);
    if(target.getChildSugar().getGlycan() instanceof Fragment === target.getChildSugar().getGlycan().getRootNode() === target.getChildSugar()) {
        parentShape.x = target.children[0].graphics._activeInstructions[1].x;
        childShape.x = childQuarterCoordinate[0];
    }
    else if(target.checkYCoordinate()) {
        parentShape.x = parentQuarterCoordinate[0] - basicData.linkageSize / 2.0;
        childShape.x = childQuarterCoordinate[0];
    }
    else {
        parentShape.x = parentQuarterCoordinate[0];
        childShape.x = childQuarterCoordinate[0];
    }

    if (target.whitchParentHighChildLow(parentQuarterCoordinate, childQuarterCoordinate)) {
        parentShape.y = parentQuarterCoordinate[1] - basicData.linkageBottomYPosition;
        childShape.y = childQuarterCoordinate[1] - basicData.linkageBottomYPosition;
    }
    else {
        parentShape.y = parentQuarterCoordinate[1] + basicData.linkageTopYPositiom;
        childShape.y = childQuarterCoordinate[1] + basicData.linkageTopYPositiom;
    }
    target.addChild(parentShape);
    target.addChild(childShape);

}