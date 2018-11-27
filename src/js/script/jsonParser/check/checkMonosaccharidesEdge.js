//@flow
"use strict";

import { JSONKeys } from "../../data/JSONKeys";
import { check_parent } from "./checkParent";
import { check_repeat } from "./checkRepeat";
import { check_fragment } from "./checkFragment";

export let check_monosaccharides_edge = (json: Object): boolean => {
    let PARENT_FLAG: boolean = false;
    let REPEAT_FLAG: boolean = false;
    let FRAGMENT_FLAG: boolean = false;
    let keys: Array<string> = Object.keys(json);
    for(let key: string of keys) {
        switch(key.toLowerCase()) {
            case JSONKeys.Parent.toLowerCase(): {
                PARENT_FLAG = check_parent(json[key]);
                if(!PARENT_FLAG) return false;
                break;
            }
            case JSONKeys.Repeat.toLowerCase(): {
                REPEAT_FLAG = check_repeat(json[key]);
                if(!REPEAT_FLAG) return false;
                break;
            }
            case JSONKeys.Fragment.toLowerCase(): {
                FRAGMENT_FLAG = check_fragment(json[key]);
                if(!FRAGMENT_FLAG) return false;
                break;
            }
            default: {
                return false;
            }
        }
    }
    if(PARENT_FLAG && REPEAT_FLAG && FRAGMENT_FLAG) return true;
    else return false;

};