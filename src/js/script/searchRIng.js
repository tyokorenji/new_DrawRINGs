//@flow
"use strict";


export function searchRing(ring: string): string {
    let resultrRing: string;
    switch(ring) {
        case "pyranose":
        case "p":
        case "P":
        case "PYRANOSE":
            resultrRing =  "p";
            break;
        case "furanose":
        case "FURANOSE":
        case "f":
        case "F":
            resultrRing = "f";
            break;
        default:
            resultrRing = "undefined";
            break;
    }
    return resultrRing;
}