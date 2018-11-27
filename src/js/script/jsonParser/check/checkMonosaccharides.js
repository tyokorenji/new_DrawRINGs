//@flow
"use strict";

import { check_monosaccharides_number_key } from "./checkMonosaccharidesNumberKey";

export let check_monosaccharides = (monosaccharide: Object): boolean => {
    let MONOSACCHARIDES_NUMBER_FLAG: boolean = true;
    let monosaccharides_keys: Array<string> = Object.keys(monosaccharide);
    let CHECK_NUMBER_KEY_FLAG: boolean = true;
    let counter = 0;
    for(let monosaccharides_key: string of monosaccharides_keys) {
        if(monosaccharides_key === String(counter)) {
            CHECK_NUMBER_KEY_FLAG = check_monosaccharides_number_key(monosaccharide[monosaccharides_key]);
            if(!CHECK_NUMBER_KEY_FLAG) {
                break;
            }
            counter += 1;
            continue;
        }
        else {
            MONOSACCHARIDES_NUMBER_FLAG = false;
            break;
        }
    }
    if(MONOSACCHARIDES_NUMBER_FLAG && CHECK_NUMBER_KEY_FLAG) return true;
    else return false;
};