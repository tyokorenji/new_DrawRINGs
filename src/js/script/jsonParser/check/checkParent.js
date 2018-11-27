//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_position_key } from "./checkPositionKey";
import { check_probability_key } from "./checkProbabilityKey";
// import { check_multipulebond } from "./checkMultipulebond";
import { check_bridge } from "./checkBridge";
import { check_linkagetype_key } from "./checkLinkagetypeKey";
import { check_parentNodeID_value } from "./checkParentNodeIdValue";

export let check_parent = (json: Array<Object>): boolean => {
    for(let parentObject: Object of json) {
        let POSITION_FLAG: boolean = false;
        let PROBABILITY_FLAG: boolean = false;
        let BRIDGE_FLAG: boolean = false;
        // let MULTIPLEBOND_FLAG: boolean = false;
        let LINKAGE_FLAG: boolean = false;
        let PARENTNODEID_FLAG: boolean = false;
        let keys: Array<string> = Object.keys(parentObject);
        for(let key: string of keys) {
            switch(key.toLowerCase()) {
                case JSONKeys.Position.toLowerCase(): {
                    POSITION_FLAG = check_position_key(parentObject[key]);
                    if(!POSITION_FLAG) return false;
                    break;
                }
                case JSONKeys.Probability.toLowerCase(): {
                    PROBABILITY_FLAG = check_probability_key(parentObject[key]);
                    if(!PROBABILITY_FLAG) return false;
                    break;

                }
                case JSONKeys.Bridge.toLowerCase(): {
                    BRIDGE_FLAG = check_bridge(parentObject[key]);
                    // console.log("bridge", BRIDGE_FLAG);
                    if(!BRIDGE_FLAG) return false;
                    break;
                }
                // case JSONKeys.MultipleBond.toLowerCase(): {
                //     MULTIPLEBOND_FLAG = check_multipulebond(parentObject[key]);
                //     if(!MULTIPLEBOND_FLAG) return false;
                //     break;
                // }
                case JSONKeys.LinkageType.toLowerCase(): {
                    LINKAGE_FLAG = check_linkagetype_key(parentObject[key]);
                    if(!LINKAGE_FLAG) return false;
                    break;
                }
                case JSONKeys.ParentNodeID.toLowerCase(): {
                    PARENTNODEID_FLAG = check_parentNodeID_value(parentObject[key]);
                    if(!PARENTNODEID_FLAG) return false;
                    break;
                }
                default: {
                    return false;
                }
            }
        }
        if(POSITION_FLAG && PROBABILITY_FLAG && BRIDGE_FLAG && LINKAGE_FLAG && PARENTNODEID_FLAG) continue;
        // if(POSITION_FLAG && PROBABILITY_FLAG && MULTIPLEBOND_FLAG && LINKAGE_FLAG && PARENTNODEID_FLAG) continue;
        else return false;
    }
    return true;

};
