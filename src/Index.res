// Type definitions
@genType
type rec term =
  | Var(string)
  | Constructor(string, array<term>)

// Core unification algorithm
@genType
let rec occurs = (x: string, term: term): bool => {
  switch term {
  | Var(y) => x == y
  | Constructor(_, args) => args->Belt.Array.some(t => occurs(x, t))
  }
}

@genType
let rec unify = (t1: term, t2: term): result<unit, string> => {
  switch (t1, t2) {
  | (Var(x), Var(y)) if x == y => Ok()
  | (Var(x), t) | (t, Var(x)) =>
    if occurs(x, t) {
      Error(`Occurs check failed: ${x} occurs in term`)
    } else {
      Ok()
    }
  | (Constructor(name1, args1), Constructor(name2, args2)) =>
    if name1 != name2 || args1->Belt.Array.length != args2->Belt.Array.length {
      Error("Constructor mismatch")
    } else {
      args1
      ->Belt.Array.zip(args2)
      ->Belt.Array.reduce(Ok(), (acc, (arg1, arg2)) => {
        switch acc {
        | Error(_) as err => err
        | Ok() => unify(arg1, arg2)
        }
      })
    }
  }
}

// Helper functions for creating terms
@genType
let makeVar = (name: string): term => Var(name)
@genType
let makeConstructor = (name: string, args: array<term>): term => Constructor(name, args)
