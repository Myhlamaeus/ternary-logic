"use strict";

import {Ternary} from "./ternary";
import {cast} from "./cast";

const U = Object.assign(new Ternary("U", null), {
    and(b) {
        if(cast(b) === Ternary.F) {
            return Ternary.F;
        }

        return this;
    },
    xor() {
        return this;
    }
});

Ternary.U = U;
export const U = U;
