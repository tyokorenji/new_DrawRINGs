//@flow
"use strict";

import { liaise } from "../main";
import { modeType } from "../../react/modeType";
import { repeatModal } from "./repeatModal";
import { createRepeatShape } from "./createRepeatShape";

export let repeatClickEvent = (event: Object) => {
    switch (liaise.modeType) {
        case modeType.REPEAT: {
            let repeatNumber: string = repeatModal();
            createRepeatShape(repeatNumber, event.currentTarget);
            liaise.stageUpdate();
            break;
        }
        default: {
            return;
        }
    }
};