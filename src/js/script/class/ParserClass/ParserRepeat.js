//@flow
"use strict";

export class ParserRepeat{
    Min: number;
    Max: number;
    Position: Object;
    Start: string;
    End: string;
    numOfRepeat: string;

    constructor() {
        this.Min = NaN;
        this.Max = NaN;
        this.Position = {};
        this.Start = "";
        this.End = "";
        this.numOfRepeat = "";
    }

    setMin(min: number ) {
        this.Min = min;
    }
    getMin(): number {
        return this.Min;
    }
    setMax(max: number) {
        this.Max = max;
    }
    getMax(): number {
        return this.Max;
    }
    setPosition(posi: Object) {
        this.Position = posi;
    }
    getPosition(): Object {
        return this.Position;
    }
    setStart(start: string) {
        this.Start = start;
    }
    getStart(): string {
        return this.Start;
    }
    setEnd(end: string) {
        this.End = end;
    }
    getEnd(): string {
        return this.End;
    }

    checkNumOfReapt() {
        if(this.Min === -1 || this.Max === -1) {
            this.numOfRepeat = "n";
        }
        else if (this.Min === 0 && this.Max === 0) {
            this.numOfRepeat = "childCyclic";
        }
        else if(this.Min === this.Max){
            this.numOfRepeat = String(this.Min);
        }
        else {
            this.numOfRepeat = String(this.Min) + "-" + String(this.Max);
        }
    }

}