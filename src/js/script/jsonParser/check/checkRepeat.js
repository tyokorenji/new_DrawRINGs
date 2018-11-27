//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_position_key } from "./checkPositionKey";
import { check_probability_key } from "./checkProbabilityKey";
import { check_linkagetype_key } from "./checkLinkagetypeKey";
import { check_parentNodeID_value } from "./checkParentNodeIdValue";

export let check_repeat = (repeats: Array<Object>): boolean => {
    for(let repeat: Object of repeats) {
        let MIN_FLAG: boolean = false;
        let POSITION_FLAG: boolean = false;
        let MAX_FLAG: boolean = false;
        let PROBABILITY_FLAG: boolean = false;
        let BRIDGE_FLAG: boolean = false;
        let LINKAGE_FLAG: boolean = false;
        let PARENTNODEID_FLAG: boolean = false;
        let keys: Array<string> = Object.keys(repeat);
        for(let key: string of keys){
            switch(key.toLowerCase()) {
                case JSONKeys.Min.toLowerCase(): {
                    if(typeof repeat[key] === "number") MIN_FLAG = true;
                    if(!MIN_FLAG) return false;
                    break;
                }
                case JSONKeys.Position.toLowerCase(): {
                    POSITION_FLAG = check_position_key(repeat[key]);
                    if(!POSITION_FLAG) return false;
                    break;
                }
                case JSONKeys.Max.toLowerCase(): {
                    if(typeof repeat[key] === "number") MAX_FLAG = true;
                    if(!MAX_FLAG) return false;
                    break;
                }
                case JSONKeys.Probability.toLowerCase(): {
                    PROBABILITY_FLAG = check_probability_key(repeat[key]);
                    if(!PROBABILITY_FLAG) return false;
                    break;
                }
                case JSONKeys.Bridge.toLowerCase():{
                    BRIDGE_FLAG = true;
                    break;
                }
                case JSONKeys.LinkageType.toLowerCase(): {
                    LINKAGE_FLAG = check_linkagetype_key(repeat[key]);
                    if(!LINKAGE_FLAG) return false;
                    break;
                }
                case JSONKeys.ParentNodeID.toLowerCase(): {
                    PARENTNODEID_FLAG = check_parentNodeID_value(repeat[key]);
                    if(!PARENTNODEID_FLAG) return false;
                    break;
                }
                default: return false;
            }

        }
        if(MIN_FLAG && POSITION_FLAG && MAX_FLAG && PROBABILITY_FLAG && BRIDGE_FLAG && LINKAGE_FLAG && PARENTNODEID_FLAG) continue;
        else return false;
    }
    return true;
};
