//////////////// direct export ////////////////

export type T0A = number;
export type T0B = { foo: string };

//////////////// type re-export ////////////////

export type { T1A, T1B } from "./src/types1";

//////////////// aggregate type re-export ////////////////

// can't aggregate re-export caused by flowgen parsing error
// export * as T2 from "./src/types2";

// can't import and re-export caused by flowgen generating invalid libdef (type / value mismatch)
// import * as T2 from "./src/types2";
// export { T2 };
// import type * as T2 from "./src/types2"; // `import type *` is no effect
// export { T2 };
// import type * as _T2 from "./src/types2";
// type T2 = { ..._T2 } // TypeScript error. can't spread in expression which assigned to type.
// export { T2 };
// import type * as _T2 from "./src/types2";
// const T2 = { ..._T2 }; // TypeScript error. can't spread type
// export { T2 };

// ** DO THIS for type re-export (give up aggregate re-export) **
export type { A as T2A, B as T2B } from "./src/types2";

//////////////// computed type (local) ////////////////

const CONST1 = { foo: "bar" } as const;
export type CONST1T = typeof CONST1;
export type CONST1KEYT = keyof typeof CONST1;

//////////////// computed type (import from local) ////////////////
// can't export type from imported identifier caused by flowgen generating invalid libdef (using typeof to type)
// import { CONST2 } from "./src/const2";
// export type CONST2T = typeof CONST2;
// export type CONST2KEYT = keyof typeof CONST2;

import { CONST2 as _CONST2 } from "./src/const2";
const CONST2 = _CONST2;
export type CONST2T = typeof CONST2;
export type CONST2KEYT = keyof typeof CONST2;

//////////////// computed type (import from package) ////////////////
import { C0A as _C0A, C0B as _C0B, C2 as _C2 } from "consts";
const C0A = _C0A;
const C0B = _C0B;
const C2 = _C2;
export type C0AType = typeof C0A;
export type C0BType = typeof C0B;
export type C0BKEYType = keyof typeof C0B;
export type C2AType = typeof C2.A;
export type C2BType = typeof C2.B;
export type C2BKEYType = keyof typeof C2.B;
