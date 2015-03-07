/* jshint node:true */

"use strict";

import {Ternary, cast, T, F, U} from "../ternary-logic.js";

export default {
    "Ternary": function(test) {
        test.ok(T instanceof Ternary);
        test.ok(F instanceof Ternary);
        test.ok(U instanceof Ternary);

        test.equals(new Ternary("whatever", String), T);

        test.done();
    },
    "T": {
        "cast": function(test) {
            test.equals(cast(T), T);
            test.equals(cast(true), T);
            test.equals(cast(1), T);
            test.equals(cast({}), T);
            test.equals(cast("test"), T);

            test.done();
        },
        "conjunction": function(test) {
            test.equals(T.and(T), T);
            test.equals(T.and(F), F);
            test.equals(T.and(U), U);

            test.done();
        },
        "negation": function(test) {
            test.equals(T.not(), F);

            test.done();
        }
    },
    "F": {
        "cast": function(test) {
            test.equals(cast(F), F);
            test.equals(cast(false), F);
            test.equals(cast(0), F);
            test.equals(cast(""), F);

            test.done();
        },
        "conjunction": function(test) {
            test.equals(F.and(T), F);
            test.equals(F.and(F), F);
            test.equals(F.and(U), F);

            test.done();
        },
        "negation": function(test) {
            test.equals(F.not(), T);

            test.done();
        }
    },
    "U": {
        "cast": function(test) {
            test.equals(cast(U), U);
            test.equals(cast(undefined), U);
            test.equals(cast(null), U);

            test.done();
        },
        "conjunction": function(test) {
            test.equals(U.and(T), U);
            test.equals(U.and(F), F);
            test.equals(U.and(U), U);

            test.done();
        },
        "negation": function(test) {
            test.equals(U.not(), U);

            test.done();
        }
    }
};
