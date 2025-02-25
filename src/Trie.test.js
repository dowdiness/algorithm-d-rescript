import { describe, it, expect } from 'vitest'
import { Trie } from './Trie.res.mjs'

describe('Trie Data Structure', () => {
  it('should create an empty trie and handle basic operations', () => {
    const trie = Trie.make()
    expect(Trie.search(trie, "")).toBe(false)
    expect(Trie.startsWith(trie, "")).toBe(true)
  })

  it('should insert and search for a word', () => {
    let trie = Trie.make()
    trie = Trie.insert(trie, "hello")

    expect(Trie.search(trie, "hello")).toBe(true)
    expect(Trie.search(trie, "hell")).toBe(false)
    expect(Trie.search(trie, "hello world")).toBe(false)
  })

  it('should handle multiple word insertions', () => {
    let trie = Trie.make()
    trie = Trie.insert(trie, "hello")
    trie = Trie.insert(trie, "hell")
    trie = Trie.insert(trie, "world")

    expect(Trie.search(trie, "hello")).toBe(true)
    expect(Trie.search(trie, "hell")).toBe(true)
    expect(Trie.search(trie, "world")).toBe(true)
    expect(Trie.search(trie, "worl")).toBe(false)
    expect(Trie.search(trie, "worlds")).toBe(false)
  })

  it('should check for prefixes', () => {
    let trie = Trie.make()
    trie = Trie.insert(trie, "hello")
    trie = Trie.insert(trie, "world")

    expect(Trie.startsWith(trie, "hel")).toBe(true)
    expect(Trie.startsWith(trie, "hello")).toBe(true)
    expect(Trie.startsWith(trie, "wor")).toBe(true)
    expect(Trie.startsWith(trie, "world")).toBe(true)
    expect(Trie.startsWith(trie, "worlds")).toBe(false)
    expect(Trie.startsWith(trie, "cat")).toBe(false)
  })

  it('should handle empty strings', () => {
    let trie = Trie.make()
    trie = Trie.insert(trie, "")

    expect(Trie.search(trie, "")).toBe(true)
    expect(Trie.startsWith(trie, "")).toBe(true)
  })

  it('should handle case sensitivity', () => {
    let trie = Trie.make()
    trie = Trie.insert(trie, "Hello")

    expect(Trie.search(trie, "Hello")).toBe(true)
    expect(Trie.search(trie, "hello")).toBe(false)
    expect(Trie.startsWith(trie, "Hel")).toBe(true)
    expect(Trie.startsWith(trie, "hel")).toBe(false)
  })
})
