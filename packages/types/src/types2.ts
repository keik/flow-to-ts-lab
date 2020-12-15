export type A = 1;
export type B = { foo: "bar" };
export type C = { foo: Nested };
export type Nested = { union: Union };
export type Union = "a" | "b";
