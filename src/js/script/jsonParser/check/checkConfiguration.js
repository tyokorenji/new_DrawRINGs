//@flow
"use strict";

export const check_configuration = (configurations: Array<string>) => {
    for (let configuration: string of configurations) {
        if(typeof configuration !== "string") return false;
        else if(configuration === "d".toLowerCase() || configuration === "l".toLowerCase()) continue;
        else return false;
    }
    return true;
};
