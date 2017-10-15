"use strict";


class LiaiseUI {
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

