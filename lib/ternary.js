"use strict";

const pPrimitive = Symbol("primitive");

export const Ternary = class Ternary {
    constructor(name, primitive) {
        if("T" in Ternary && "F" in Ternary && "U" in Ternary) {
            return Ternary.cast(name);
        }

        this.name = name;
        this[pPrimitive] = primitive;
    }

    toString() {
        return this.name;
    }

    valueOf() {
        return this[pPrimitive];
    }

    eq(b) {
        return Ternary.cast(this === Ternary.cast(b));
    }

    not() {
        return this.xor(Ternary.T);
    }
};
