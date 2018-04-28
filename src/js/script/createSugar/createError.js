//@flow
"use strict";
import { Sugar } from "../class/Sugar";

export let createError = (): Sugar => {
    return new Sugar("undefined");
};