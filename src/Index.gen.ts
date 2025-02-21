/* TypeScript file generated from Index.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as IndexJS from './Index.res.mjs';

export type term =
    { TAG: "Var"; _0: string }
  | { TAG: "Constructor"; _0: string; _1: term[] };

export const occurs: (x:string, term:term) => boolean = IndexJS.occurs as any;

export const unify: (t1:term, t2:term) =>
    { TAG: "Ok"; _0: void }
  | { TAG: "Error"; _0: string } = IndexJS.unify as any;

export const makeVar: (name:string) => term = IndexJS.makeVar as any;

export const makeConstructor: (name:string, args:term[]) => term = IndexJS.makeConstructor as any;
