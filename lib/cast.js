import {Ternary} from "./ternary";

export function cast(a) {
    if(a instanceof Ternary) {
        return a;
    }

    if(a === null || a === undefined) {
        return Ternary.U;
    } else if(a) {
        return Ternary.T;
    }
    return Ternary.F;
}

Ternary.cast = cast;
