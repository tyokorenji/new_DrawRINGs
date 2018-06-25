//@flow
"use strict";

import { VisibleElement } from "./VisibleElement";
import { CompositionText } from "./compositionText";

export class Composition extends VisibleElement {
    name: string;
    compositionText: Object;

    constructor(name: string){
        super();
        this.name = name;
        this.compositionText = {};
    }

    getName() {
        return this.name;
    }

    setCompositionText(text: CompositionText) {
        this.compositionText = text;
    }
    getCompositionText(): CompositionText {
        return this.compositionText;
    }
}