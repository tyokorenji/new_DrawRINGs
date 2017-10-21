//@flow
"use strict";

import createjs from "createjs-easeljs";

class LiaiseUI {
    textArea: string;
    stage: createjs.Stage;

    constructor() {
        this.textArea = "initial ";
        this.stage = new createjs.Stage();
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

