//@flow
"use strict";

export let check_parentNodeID_value = (parentNodeID: number): boolean => {
    if(typeof parentNodeID === "number") return true;
    else return false;
};