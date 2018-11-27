//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_position_key } from "./checkPositionKey";
import { check_probability_key } from "./checkProbabilityKey";
import { check_notation_value } from "./checkNotationValue";
import { check_linkagetype_key } from "./checkLinkagetypeKey";

export let check_subfrafgment_number_key = (subfragment: Object): boolean => {
    let POSITION_FLAG: boolean = false;
    let PROBABILITY_FLAG: boolean = false;
    let NOTATION_FLAG: boolean = false;
    let LINKAGE_FLAG: boolean = false;
    let PARENTNODEID_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(subfragment);
    for(let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.Position.toLowerCase(): {
                POSITION_FLAG = check_position_key(subfragment[key]);
                if(!POSITION_FLAG) return false;
                break;
            }
            case JSONKeys.Probability.toLowerCase(): {
                PROBABILITY_FLAG = check_probability_key(subfragment[key]);
                if(!PROBABILITY_FLAG) return false;
                break;
            }
            case JSONKeys.Notation.toLowerCase(): {
                NOTATION_FLAG = check_notation_value(subfragment[key]);
                if(!NOTATION_FLAG) return false;
                break;
            }
            case JSONKeys.LinkageType.toLowerCase(): {
                LINKAGE_FLAG = check_linkagetype_key(subfragment[key]);
                if(!LINKAGE_FLAG) return false;
                break;
            }
            case JSONKeys.ParentNodeID.toLowerCase(): {
                for(let id: number of subfragment[key]) {
                    if(typeof id !== "number") return false;
                }
                PARENTNODEID_FLAG = true;
                break;
            }
            default: return false;
        }
    }
    if(POSITION_FLAG && PROBABILITY_FLAG && NOTATION_FLAG && LINKAGE_FLAG && PARENTNODEID_FLAG) return true;
    else return false;
};