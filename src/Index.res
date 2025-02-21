module Trie = {
  // Type definitions for Trie node
  type rec node = {
    isEndOfWord: bool,
    children: Belt.Map.String.t<node>
  }

  // Create a new empty trie node
  let makeNode = () => {
    isEndOfWord: false,
    children: Belt.Map.String.empty
  }

  // Insert a word into the trie
  let rec insert = (root: node, word: string): node => {
    if word == "" {
      // If we've reached the end of the word, mark this node
      {...root, isEndOfWord: true}
    } else {
      let firstChar = Js.String2.substring(word, ~from=0, ~to_=1)
      let restOfWord = Js.String2.substring(word, ~from=1, ~to_=Js.String2.length(word))

      // Get or create child node for this character
      let childNode = switch Belt.Map.String.get(root.children, firstChar) {
      | None => makeNode()
      | Some(node) => node
      }

      // Recursively insert the rest of the word
      let updatedChild = insert(childNode, restOfWord)

      // Update the children map with the new/updated node
      {
        ...root,
        children: Belt.Map.String.set(root.children, firstChar, updatedChild)
      }
    }
  }

  // Search for a word in the trie
  let rec search = (root: node, word: string): bool => {
    if word == "" {
      root.isEndOfWord
    } else {
      let firstChar = Js.String2.substring(word, ~from=0, ~to_=1)
      let restOfWord = Js.String2.substring(word, ~from=1, ~to_=Js.String2.length(word))

      switch Belt.Map.String.get(root.children, firstChar) {
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
      let firstChar = Js.String2.substring(prefix, ~from=0, ~to_=1)
      let restOfPrefix = Js.String2.substring(prefix, ~from=1, ~to_=Js.String2.length(prefix))

      switch Belt.Map.String.get(root.children, firstChar) {
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
