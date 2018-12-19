//@flow
"use strict";

import { modifiData } from "../../data/modificationData";

export class ParserBridge {
    Acceptor: string;
    Donor: string;
    Notation: string;
    dataNoatation: string;

    constructor(){
        this.Acceptor = "";
        this.Donor = "";
        this.Notation = "";
        this.dataNoatation = "Undefined";
    }

    setAcceptor(ac: string) {
        this.Acceptor = ac;
    }
    getAcceptor(): string {
        return this.Acceptor;
    }
    setDonor(donor: string) {
        this.Donor = donor;
    }
    getDonor(): string {
        return this.Donor;
    }
    setNotation(no: string) {
        this.Notation = no;
    }
    getNotation(): string {
        return this.Notation;
    }

    checkNoatation() {
        for(let key: string of Object.keys(modifiData)) {
            if(key.toLowerCase() === this.getNotation().toLowerCase()) {
                this.dataNoatation = key;
            }
        }
    }
}