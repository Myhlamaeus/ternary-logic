import {Ternary} from "./ternary";
import {cast} from "./cast";

const F = Object.assign(new Ternary("F", false), {
    and() {
        return this;
    },
    xor(b) {
        return cast(b);
    }
});

Ternary.F = F;
export const F = F;
