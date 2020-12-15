// can't aggregate re-export caused by flowgen parsing error
// export * as C2 from "./src/fns1";

// can't import and re-export caused by generating invalid libdef (type / value mismatch)
// import  * as C2 from "./src/fns1";
// export { C2 };

import type { T0B, T2C } from "types";

// ** DO THIS for aggregate re-export **
import * as _Fns1 from "./src/fns1";
const Fns1 = { ..._Fns1 };
export { Fns1 };
