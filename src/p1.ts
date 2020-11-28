export type P1A = number;

export type P1B = { foo: string };

const p1c: number = 1;
export type P1C = typeof p1c;

const p1d = { foo: "bar" };
export type P1D = typeof p1d;

export const p1e = { buz: "qux" };
export type P1E = typeof p1e;
