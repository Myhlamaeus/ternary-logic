import {Ternary} from "./ternary";

const cast = function(a) {
    if(a instanceof Ternary) {
        return a;
    }

    if(a === null || a === undefined) {
        return Ternary.U;
    } else if(a) {
        return Ternary.T;
    }
    return Ternary.F;
};

Ternary.cast = cast;
export const cast = cast;
