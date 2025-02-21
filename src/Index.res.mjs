// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

function occurs(x, term) {
  if (term.TAG === "Var") {
    return x === term._0;
  } else {
    return Belt_Array.some(term._1, (function (t) {
                  return occurs(x, t);
                }));
  }
}

function unify(t1, t2) {
  var x;
  var t;
  if (t1.TAG === "Var") {
    var x$1 = t1._0;
    if (t2.TAG === "Var") {
      if (x$1 === t2._0) {
        return {
                TAG: "Ok",
                _0: undefined
              };
      }
      x = x$1;
      t = t2;
    } else {
      x = x$1;
      t = t2;
    }
  } else {
    var args1 = t1._1;
    if (t2.TAG === "Var") {
      x = t2._0;
      t = t1;
    } else {
      var args2 = t2._1;
      if (t1._0 !== t2._0 || args1.length !== args2.length) {
        return {
                TAG: "Error",
                _0: "Constructor mismatch"
              };
      } else {
        return Belt_Array.reduce(Belt_Array.zip(args1, args2), {
                    TAG: "Ok",
                    _0: undefined
                  }, (function (acc, param) {
                      if (acc.TAG === "Ok") {
                        return unify(param[0], param[1]);
                      } else {
                        return acc;
                      }
                    }));
      }
    }
  }
  if (occurs(x, t)) {
    return {
            TAG: "Error",
            _0: "Occurs check failed: " + x + " occurs in term"
          };
  } else {
    return {
            TAG: "Ok",
            _0: undefined
          };
  }
}

function makeVar(name) {
  return {
          TAG: "Var",
          _0: name
        };
}

function makeConstructor(name, args) {
  return {
          TAG: "Constructor",
          _0: name,
          _1: args
        };
}

export {
  occurs ,
  unify ,
  makeVar ,
  makeConstructor ,
}
/* No side effect */
