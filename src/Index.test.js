import { describe, it, expect } from 'vitest'
import { makeVar, makeConstructor, unify } from './Index.res.mjs'

describe('Algorithm D Unification', () => {
  it('should unify identical variables', () => {
    const x = makeVar('x')
    const result = unify(x, x)
    expect(result).toEqual({ TAG: "Ok", _0: undefined })
  })

  it('should unify variable with constructor', () => {
    const x = makeVar('x')
    const cons = makeConstructor('cons', [makeVar('y')])
    const result = unify(x, cons)
    expect(result).toEqual({ TAG: "Ok", _0: undefined })
  })

  it('should fail occurs check', () => {
    const x = makeVar('x')
    const cons = makeConstructor('cons', [x])
    const result = unify(x, cons)
    expect(result).toEqual({
      TAG: "Error",
      _0: 'Occurs check failed: x occurs in term'
    })
  })

  it('should unify identical constructors', () => {
    const cons1 = makeConstructor('cons', [makeVar('x')])
    const cons2 = makeConstructor('cons', [makeVar('y')])
    const result = unify(cons1, cons2)
    expect(result).toEqual({ TAG: "Ok", _0: undefined })
  })

  it('should fail on different constructors', () => {
    const cons1 = makeConstructor('cons', [makeVar('x')])
    const cons2 = makeConstructor('nil', [])
    const result = unify(cons1, cons2)
    expect(result).toEqual({
      TAG: "Error",
      _0: 'Constructor mismatch'
    })
  })
})
