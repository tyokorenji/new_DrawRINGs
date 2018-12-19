//@flow
"use strict";

import {JSONKeys} from "../../data/JSONKeys";
import { Glycobond } from "../Glycobond";

export class ParserBinding{
    Acceptor: string;
    Donor: string;
    Position: Object;
    parentSide: Array<number>;
    childSide: Array<number>;
    constructor() {
        this.Acceptor = "";
        this.Donor = "";
        this.Position = {};
        this.parentSide = [];
        this.childSide = [];
    }

    setAcceptor(ac: string) {
        this.Acceptor = ac;
    }
    getAcceptor(): string {
        return this.Acceptor;
    }

    setDonor(don: string) {
        this.Donor = don;
    }
    getDonor(): string {
        return this.Donor;
    }

    setPosition(posi: Object) {
        this.Position = posi;
    }
    getPosition(): Object {
        return this.Position;
    }

    checkWhichSide() {
        for(let key: string of Object.keys(this.Position)) {
            switch(key.toLowerCase()) {
                case JSONKeys.Acceptor.toLowerCase(): {
                    this.parentSide = this.Position[key];
                    break;
                }
                case JSONKeys.Donor.toLowerCase(): {
                    this.childSide = this.Position[key];
                    break;
                }
            }
        }
    }

    createGlycoBond(): Glycobond {
        let bind: Glycobond = new Glycobond();
        bind.svgChildPosition = this.childSide;
        bind.svgParentPosition = this.parentSide;
        bind.jsonParentId = this.Acceptor;
        bind.jsonChildId = this.Donor;
        return bind;
    }
}