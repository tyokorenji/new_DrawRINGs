//@flow
"use strict";

import createjs from "createjs-easeljs";
import { nodeModeType } from "../../react/nodeModeType";
import { modeType } from "../../react/modeType";

class LiaiseUI {
    textArea: string;
    stage: createjs.Stage;
    nodeSelect: Symbol;
    modeType: Symbol;


    constructor() {
        this.textArea = "initial ";
        this.stage = new createjs.Stage();
        this.nodeSelect = nodeModeType.NOT_SELECTED;
        this.modeType = modeType.NOT_SELECTED;
    }

    hasTextAreaValue() {
        if (this.textArea != "") {
            return true;
        }
        else {
            return false;
        }
    }
}

export { LiaiseUI };

