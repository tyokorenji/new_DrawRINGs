//@flow
"use strict";

import { check_subfrafgment_number_key } from "./checkSubfrafgmentNumberKey";

export let check_subfragment = (subfragment: Object): boolean => {
    let KEY_NUMBER_FLAG: boolean = false;
    let counter: number = 0;
    let keys: Array<string> = Object.keys(subfragment);
    for(let key: string of keys) {
        switch(key) {
            case String(counter): {
                KEY_NUMBER_FLAG = check_subfrafgment_number_key(subfragment[key]);
                if(!KEY_NUMBER_FLAG) return false;
                counter += 1;
                break;
            }
            default: {
                return false;
            }
        }
    }
    return true;
};