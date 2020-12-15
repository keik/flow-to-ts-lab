import { T0B, T2C } from "types";

export const f1a = (): number => 1;
export const f1b = (): T0B => {
  return { foo: "bar" };
};
export const f1c = (): T2C => {
  return { foo: { union: "a" } };
};
