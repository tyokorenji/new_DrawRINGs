//@flow
"use strict";
import { Node } from "./Node";
import { Edge } from "./Edge";


class Sugar extends Node{
    name: string;  //単糖の名前
    anomeric: string;  //アノマーの位置（"alpha α a" or "beta β b" or "open o" or "undefined"）
    isomer: string;  //構造異性体("L" or "D" or "undefined")
    ring: string;  //フラノースかピラノースか("pyranose p" or "furanose f" or "undefined")

    constructor(name: string){
        super();
        this.name = name;
        this.anomeric = "undefined";
        this.isomer = "undefined";
        this.ring = "undefined";
    }

    getName(): string{
        return this.name;
    }

    getAnomeric(): string {
        return this.anomeric;
    }

    setAnomeric(anomeric: string) {
        this.anomeric = anomeric;
        return;
    }

    getIsomer(): string {
        return this.isomer;
    }

    setIsomer(isomer: string) {
        this.isomer = isomer;
        return;
    }

    getRing(): string {
        return this.ring;
    }

    setRing(ring: string) {
        this.ring = ring;
        return;
    }

}

export { Sugar };