//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_position_key } from "./checkPositionKey";
import { check_probability_key } from "./checkProbabilityKey";
import { check_linkagetype_key } from "./checkLinkagetypeKey";

export let check_fragment = (fragment: Object): boolean => {
    let POSITION_FLAG: boolean = false;
    let ANCHORID_FLAG: boolean = false;
    let PROBABILITY_FLAG: boolean = false;
    let LINKAGETYPE_FLAG: boolean = false;
    let PARENTNODEID_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(fragment);
    if(keys.length === 0) return true;
    for (let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.Position.toLowerCase(): {
                POSITION_FLAG = check_position_key(fragment[key]);
                if(!POSITION_FLAG) return false;
                break;
            }
            case JSONKeys.AnchorID.toLowerCase(): {
                if(typeof fragment[key] === "number") ANCHORID_FLAG = true;
                if(!ANCHORID_FLAG) return false;
                break;
            }
            case JSONKeys.Probability.toLowerCase(): {
                PROBABILITY_FLAG = check_probability_key(fragment[key]);
                if(!PROBABILITY_FLAG) return false;
                break;
            }
            case JSONKeys.LinkageType.toLowerCase(): {
                LINKAGETYPE_FLAG = check_linkagetype_key(fragment[key]);
                if(!LINKAGETYPE_FLAG) return false;
                break;
            }
            case JSONKeys.ParentNodeID.toLowerCase(): {
                for(let id: number of fragment[key]) {
                    if(typeof id !== "number") return false;
                }
                PARENTNODEID_FLAG = true;
            }
        }
    }
    if(POSITION_FLAG && ANCHORID_FLAG && PROBABILITY_FLAG && LINKAGETYPE_FLAG && PARENTNODEID_FLAG) return true;
    else return false;
};
