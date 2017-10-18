//@flow
"use strict";

import { Node } from "./Node";

class Modification extends Node {
    name: string;  //名前

    constructor(name: string){
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

}

export { Modification };