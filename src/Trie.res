@genType
module Trie = {
  // Type definitions for Trie node
  type rec node = {
    isEndOfWord: bool,
    children: Dict.t<node>
  }

  // Create a new empty trie node
  let makeNode = () => {
    isEndOfWord: false,
    children: Dict.make()
  }

  // Insert a word into the trie
  let rec insert = (root: node, word: string): node => {
    if word == "" {
      // If we've reached the end of the word, mark this node
      {...root, isEndOfWord: true}
    } else {
      let firstChar = String.substring(word, ~start=0, ~end=1)
      let restOfWord = String.substring(word, ~start=1, ~end=String.length(word))

      // Get or create child node for this character
      let childNode = switch Dict.get(root.children, firstChar) {
      | None => makeNode()
      | Some(node) => node
      }

      // Recursively insert the rest of the word
      let updatedChild = insert(childNode, restOfWord)
      // Update the children map with the new/updated node
      Dict.set(root.children, firstChar, updatedChild)

      root
    }
  }

  // Search for a word in the trie
  let rec search = (root: node, word: string): bool => {
    if word == "" {
      root.isEndOfWord
    } else {
      let firstChar = String.substring(word, ~start=0, ~end=1)
      let restOfWord = String.substring(word, ~start=1, ~end=String.length(word))

      switch Dict.get(root.children, firstChar) {
      | None => false
      | Some(childNode) => search(childNode, restOfWord)
      }
    }
  }

  // Check if a prefix exists in the trie
  let rec startsWith = (root: node, prefix: string): bool => {
    if prefix == "" {
      true
    } else {
      let firstChar = String.substring(prefix, ~start=0, ~end=1)
      let restOfPrefix = String.substring(prefix, ~start=1, ~end=String.length(prefix))

      switch Dict.get(root.children, firstChar) {
      | None => false
      | Some(childNode) => startsWith(childNode, restOfPrefix)
      }
    }
  }

  // Helper function to create a new trie
  let make = () => makeNode()

  // Public interface
  type t = node
}

// Export the module
module type Trie = {
  type t
  let make: unit => t
  let insert: (t, string) => t
  let search: (t, string) => bool
  let startsWith: (t, string) => bool
}
