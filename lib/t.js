"use strict";

import {Ternary} from "./ternary";
import {cast} from "./cast";

const T = Object.assign(new Ternary("T", true), {
    and(b) {
        return cast(b);
    },
    xor(b) {
        b = cast(b);

        if(b === this) {
            return Ternary.F;
        } else if(b === Ternary.F) {
            return this;
        }

        return Ternary.U;
    }
});

Ternary.T = T;
export const T = T;
