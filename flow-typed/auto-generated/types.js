/**
 * Flowtype definitions for types
 * Generated by @keik/generate-flow-types-from-ts-package
 */

declare module "types" {
  declare export type T0A = number;
  declare export type T0B = {
    foo: string,
    ...
  };
  declare export { T1A, T1B } from "types/src/types1";

  declare export { A as T2A, B as T2B } from "types/src/types2";

  declare var CONST1: {
    +foo: "bar",
    ...
  };
  declare export type CONST1T = typeof CONST1;
  declare export type CONST1KEYT = $Keys<typeof CONST1>;
  declare var CONST2: {
    +foo: "bar",
    ...
  };
  declare export type CONST2T = typeof CONST2;
  declare export type CONST2KEYT = $Keys<typeof CONST2>;
  declare var C0A: 1;
  declare var C0B: {
    +foo: "bar",
    ...
  };
  declare var C2: {
    A: 1,
    B: {
      +foo: "bar",
      ...
    },
    ...
  };
  declare export type C0AType = typeof C0A;
  declare export type C0BType = typeof C0B;
  declare export type C0BKEYType = $Keys<typeof C0B>;
  declare export type C2AType = typeof C2.A;
  declare export type C2BType = typeof C2.B;
  declare export type C2BKEYType = $Keys<typeof C2.B>;
}

declare module "types/src/types1" {
  declare export type T1A = 1;
  declare export type T1B = {
    foo: "bar",
    ...
  };
}

declare module "types/src/types2" {
  declare export type A = 1;
  declare export type B = {
    foo: "bar",
    ...
  };
}
