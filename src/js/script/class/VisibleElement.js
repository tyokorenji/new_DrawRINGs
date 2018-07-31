//@flow
"use strict";

import cleatejs from "createjs-easeljs";

class VisibleElement extends cleatejs.Container {
    xCoord: number;  //オブジェクトのx座標
    yCoord: number;  //オブジェクトのy座標
    constructor(){
        super();
        this.xCoord = 0;
        this.yCoord = 0;
    }

    getXCoord(): number {
        return this.xCoord;
    }

    setXCoord(xCoord: number) {
        this.x = xCoord;
        this.xCoord = xCoord;
        return;
    }

    getYCoord(): number {
        return this.yCoord;
    }

    setYCoord(yCoord: number) {
        this.y = yCoord;
        this.yCoord = yCoord;
        return;
    }
}

export { VisibleElement };

