import type { M31A, M31B } from "./m3-1";

1 as M31A;
({ foo: "1" } as M31B);

export type M31AX = M31A;
export type M31BX = M31B;
