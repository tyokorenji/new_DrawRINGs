//@flow
"use strict";

import createjs from "createjs-easeljs";
import { nodeModeType } from "../../react/nodeModeType";

class LiaiseUI {
    textArea: string;
    stage: createjs.Stage;
    nodeSelect: string;

    constructor() {
        this.textArea = "initial ";
        this.stage = new createjs.Stage();
        this.nodeSelect = nodeModeType.NOT_SELECTED;
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

