//@flow
"use strict";

export class ParserMonosaccharide {
    id: number;
    trivialName: string;
    isomer: string;
    ring: string;
    anomer: string;
    modificaitons: Array<Object>;
    superClass: string;
    trivialNotation: string;
    parentEdges: Array<Object>;


    constructor() {
        this.id = NaN;
        this.trivialName = "undefined";
        this.isomer = "undefined";
        this.ring = "undefined";
        this.anomer = "undefined";
        this.modificaitons = [];
        this.superClass = "undefined";
        this.trivialNotation = "undefined";
        this.parentEdges = [];
    }

    setId(number: number) {
        this.id = number;
    }
    getId(): number {
        return this.id;
    }

    setTrivialName(name: string) {
        this.trivialName = name;
    }
    getTrivialName(): string {
        return this.trivialName;
    }

    setIsomer(isomer: string) {
        this.isomer = isomer;
    }
    getIsomer(): string {
        return this.isomer;
    }

    setRing(ring: string) {
        this.ring = ring;
    }
    getRing(): string {
        return this.ring;
    }

    setAnomer(anomer: string) {
        this.anomer = anomer;
    }
    getAnomer(): string {
        return this.anomer;
    }

    setModigication(modification: Object) {
        this.modificaitons.push(modification);
    }
    getmodification(): Array<Object> {
        return this.modificaitons;
    }

    setSuperClass(superClass: string) {
        this.superClass = superClass;
    }
    getSuperClass(): string {
        return this.superClass;
    }

    setTrivialNoation(notation: string) {
        this.trivialNotation = notation;
    }
    getTrivialNoation(): string {
        return this.trivialNotation;
    }

    setParentEdge(edge: Object) {
        this.parentEdges.push(edge);
    }
    getParentEdge(): Array<Object> {
        return this.parentEdges;
    }
};