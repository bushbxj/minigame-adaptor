Bridge.assembly("unity-script-converter", function ($asm, globals) {
    "use strict";

    Bridge.define("MiniGameAdaptor.TextAnchor", {
        $kind: "enum",
        statics: {
            fields: {
                UpperLeft: 0,
                UpperCenter: 1,
                UpperRight: 2,
                MiddleLeft: 3,
                MiddleCenter: 4,
                MiddleRight: 5,
                LowerLeft: 6,
                LowerCenter: 7,
                LowerRight: 8
            }
        }
    });
});

 