//@flow
"use strict";

export let repeatModal = (): string => {
    let repeatNumber: string = prompt("Please repeat number", "n");
    if(repeatNumber) {
        return repeatNumber;
    }
    else {
        repeatNumber = "n";
        return repeatNumber;
    }
};