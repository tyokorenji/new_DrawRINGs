//@flow
"use strict";

import { VisibleElement } from "./VisibleElement";

class Bracket extends VisibleElement{
    SVGShape: string;

    constructor(){
        super();
        this.SVGShape = "";
    }
    setSVGShape(svg: string) {
        this.SVGShape = svg;
    }
    getSVGShape(): string {
        return this.SVGShape;
    }
}

export { Bracket };