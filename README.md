# flow-to-ts-lab

Playground to Survey Flow to TypeScript migration path.

# patterns

- local TypeScript file
  - no import
    - [p1] export type
    - [p2] export const
    - [p3] export function
  - import package
    - [p4] import package
      - [p4c] named
      - [p4d] aggregate
      - [p4e] type
  - import local module
    - [m1] default and named import from local
    - [m2] aggregate import from local
    - [m3] import type from local and re-export with rename
    - [m4] import const and export computed type

- internal package implemented by TypeScript
  - consts package
    - direct export
    - named re-export
    - aggregate re-export
  - types package
    - direct type export
    - type re-export
    - aggregate type re-export
    - compute type from local
    - compute type from module
    - compute type from package

# generate

generate flow declare file (*.js.flow) from TypeScript source:

```
make all
```

generate flow libdef (flow-typed/auto-generated/*.js) from package implemented by TypeScript:

```
npx generate-flow-types-from-ts-package path/to/package --outdir flow-typed/auto-generated
```
