//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_position } from "./checkPosition";
import { check_notation_value } from "./checkNotationValue";

export let check_multipulebond = (bridge: Object): boolean => {
    let POSITION_FLAG: boolean = false;
    let NOTATION_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(bridge);
    for(let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.Position.toLowerCase(): {
                POSITION_FLAG = check_position(bridge[key]);
                if(!POSITION_FLAG) return false;
                break;
            }
            case JSONKeys.Notation.toLowerCase(): {
                NOTATION_FLAG = check_notation_value(bridge[key]);
                if(!NOTATION_FLAG) return false;
                break;
            }
            default: {
                return false;
            }
        }
    }
    if(POSITION_FLAG && NOTATION_FLAG) return true;
    else return false;

};