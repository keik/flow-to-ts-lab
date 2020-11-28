export const C0A = 1 as const;
export const C0B = { foo: "bar" } as const;

export { C1A, C1B } from "./src/consts1";

// can't aggregate re-export caused by flowgen parsing error
// export * as C2 from "./src/consts2";

// can't import and re-export caused by generating invalid libdef (type / value mismatch)
// import  * as C2 from "./src/consts2";
// export { C2 };

// ** DO THIS for aggregate re-export **
import * as _C2 from "./src/consts2";
const C2 = { ..._C2 };
export { C2 };
