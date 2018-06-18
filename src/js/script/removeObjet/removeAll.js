//@flow
"use strict";

export let removeAll = () => {
    let repeatNumber: string = prompt("Would you remove all Objects?", "n");
    if(repeatNumber) {
        return repeatNumber;
    }
    else {
        repeatNumber = "n";
        return repeatNumber;
    }
};