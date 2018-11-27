//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_monosaccharides_substituent_positionone } from "./checkMonosaccharidesSubstituentPositionone";
import { check_notation_value } from "./checkNotationValue";

export let check_monosaccharides_substituent = (json: Array<Object>): boolean => {
    let POSITIONONE_FLAG: boolean = false;
    let POSITIONTWO_FLAG: boolean = false;
    let NOTATION_FLAG: boolean = false;
    for(let substituent: Object of json) {
        let keys: Array<string> = Object.keys(substituent);
        for (let key: string of keys) {
            switch (key.toLowerCase()) {
                case JSONKeys.PositionOne.toLowerCase(): {
                    POSITIONONE_FLAG = check_monosaccharides_substituent_positionone(substituent[key]);
                    if(!POSITIONONE_FLAG) return false;
                    break;
                }
                case JSONKeys.PositionTwo.toLowerCase(): {
                    POSITIONTWO_FLAG = check_monosaccharides_substituent_positionone(substituent[key]);
                    if(!POSITIONTWO_FLAG) return false;
                    break;
                }
                case JSONKeys.Notation.toLowerCase(): {
                    NOTATION_FLAG = check_notation_value(substituent[key]);
                    if(!NOTATION_FLAG) return false;
                    break;
                }
                default: return false;
            }
        }
        if(POSITIONONE_FLAG && POSITIONTWO_FLAG && NOTATION_FLAG) continue;
        else return false;
    }
    return true;

};