//@flow
"use strict";

class LiaiseUI {
    textArea: string;

    constructor() {
        this.textArea = "initial ";
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

