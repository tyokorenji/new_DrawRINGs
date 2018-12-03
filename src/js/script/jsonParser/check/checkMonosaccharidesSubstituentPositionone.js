//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_position } from "./checkPosition";
import { check_probability } from "./checkProbability";
import { check_linkagetype } from "./checkLinkagetype";

export let check_monosaccharides_substituent_positionone = (json: Object): boolean => {
    let POSITION_FLAG: boolean = false;
    let PROBABILITY_FLAG: boolean = false;
    let LINKAGETYPE_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(json);
    for(let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.Position.toLowerCase(): {
                POSITION_FLAG = check_position(json[key]);
                if(!POSITION_FLAG) return false;
                break;
            }
            case JSONKeys.Probability.toLowerCase(): {
                PROBABILITY_FLAG = check_probability(json[key]);
                if(!PROBABILITY_FLAG) return false;
                break;

            }
            case JSONKeys.LinkageType.toLowerCase(): {
                LINKAGETYPE_FLAG = check_linkagetype(json[key]);
                if(!LINKAGETYPE_FLAG) return false;
                break;
            }
            default: return false;
        }
    }
    if (keys.length === 0) return true;
    else if(POSITION_FLAG && PROBABILITY_FLAG && LINKAGETYPE_FLAG) return true;
    else return false;
};