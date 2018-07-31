//@flow
"use strict";

import { basicData } from "./data/graphicsData";
import { Sugar } from "./class/Sugar";
import { removeSetGlids } from "./main";


export let getRelativeCoordinate = (mouseX: number, mouseY: number): Array<number> => {
    // let rect = event.target.getBoundingClientRect();
    // let mouseX = event.clientX - rect.left;
    // let mouseY = event.clientY - rect.top;
    let normalDistace = basicData.symbolDistance + basicData.symbolSize * 2;
    let distace = basicData.symbolDistance + basicData.symbolSize * 2;
    let flagX = false;
    let flagY = false;
    while(distace < basicData.canvasSize + normalDistace) {
        if(distace - normalDistace < mouseX && distace > mouseX){
            mouseX = (distace - normalDistace) + (normalDistace / 2);
            flagX = true;
        }
        if(distace - normalDistace < mouseY && distace > mouseY){
            mouseY = (distace - normalDistace) + (normalDistace / 2);
            flagY = true;
        }
        distace = distace + normalDistace;
        if(distace > basicData.canvasSize - normalDistace) {
            if(!flagX && !flagY) {
                mouseX = 0;
                mouseY = 0;
            }
        }
    }

    return [mouseX, mouseY];
};

export let getMouseCoordinateCanvas = (event: Object): Array<number> => {
    let rect = event.target.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    return [mouseX, mouseY];
};

export let changeNextGlidCoordinate = (parentSugar: Sugar, childSugar: Sugar): Array<number> => {
    let normalDistace = basicData.symbolDistance + basicData.symbolSize * 2;
    //親糖鎖構造の左側にある
    if (parentSugar.getXCoord() !== childSugar.getXCoord() && parentSugar.getYCoord() === childSugar.getYCoord()) {
        if (parentSugar.getXCoord() - normalDistace === childSugar.getXCoord()) {
            removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            return [childSugar.getXCoord() - normalDistace, childSugar.getYCoord()];
        }

    }
    //親糖鎖構造の左上にある
    else if (parentSugar.getXCoord() !== childSugar.getXCoord() && parentSugar.getYCoord() < childSugar.getYCoord()) {
        if(parentSugar.getXCoord() - normalDistace === childSugar.getXCoord() && parentSugar.getYCoord() - normalDistace === childSugar.getYCoord()) {
            removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            return  [childSugar.getXCoord() - normalDistace, childSugar.getYCoord() - normalDistace];
        }

    }
    //親糖鎖構造の左下にある
    else if (parentSugar.getXCoord() !== childSugar.getXCoord() && parentSugar.getYCoord() > childSugar.getYCoord()) {
        if(parentSugar.getXCoord() - normalDistace === childSugar.getXCoord() && parentSugar.getYCoord() + normalDistace === childSugar.getYCoord()) {
            removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            return  [childSugar.getXCoord() - normalDistace, childSugar.getYCoord() + normalDistace];
        }

    }
    //親糖鎖構造の上にある
    else if (parentSugar.getXCoord() === childSugar.getXCoord() && parentSugar.getYCoord() < childSugar.getYCoord()) {
        if(parentSugar.getYCoord() - normalDistace === childSugar.getYCoord()) {
            removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            return  [childSugar.getXCoord(), childSugar.getYCoord() - normalDistace];
        }

    }
    //親糖鎖構造の下にある
    else if (parentSugar.getXCoord() === childSugar.getXCoord() && parentSugar.getYCoord() > childSugar.getYCoord()) {
        if(parentSugar.getYCoord() + normalDistace === childSugar.getYCoord()) {
            removeSetGlids([childSugar.getXCoord(), childSugar.getYCoord()]);
            return  [childSugar.getXCoord(), childSugar.getYCoord() + normalDistace];
        }
    }
    return [];
};
