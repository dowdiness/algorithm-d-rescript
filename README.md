# ReScript Trie Implementation

A ReScript implementation of a Trie (prefix tree) data structure. This implementation provides efficient string operations for storing and retrieving strings with common prefixes.

## Installation

```bash
pnpm add algorithm-d-rescript
```

## Features

- Insert words into the trie
- Search for exact words
- Check for prefixes
- Case-sensitive operations
- Efficient prefix-based operations
- Immutable implementation

## Usage

```javascript
import { Trie } from 'algorithm-d-rescript/src/Index.res.mjs';

// Create a new trie
let trie = Trie.make();

// Insert words
trie = Trie.insert(trie, "hello");
trie = Trie.insert(trie, "world");

// Search for words
console.log(Trie.search(trie, "hello")); // true
console.log(Trie.search(trie, "hell")); // false

// Check prefixes
console.log(Trie.startsWith(trie, "hel")); // true
console.log(Trie.startsWith(trie, "cat")); // false
```

## API

### Module `Trie`

#### `Trie.make()`
Creates a new empty trie.

#### `Trie.insert(trie, word)`
Inserts a word into the trie. Returns a new trie with the word inserted.
- `trie`: The trie to insert into
- `word`: The word to insert
- Returns: A new trie containing the inserted word

#### `Trie.search(trie, word)`
Searches for an exact word in the trie.
- `trie`: The trie to search in
- `word`: The word to search for
- Returns: `true` if the word exists, `false` otherwise

#### `Trie.startsWith(trie, prefix)`
Checks if any word in the trie starts with the given prefix.
- `trie`: The trie to search in
- `prefix`: The prefix to search for
- Returns: `true` if such a word exists, `false` otherwise

## Implementation Details

The trie is implemented as an immutable data structure using ReScript's module system. Each node in the trie contains:
- A boolean flag indicating if it represents the end of a word
- A map of children nodes, where each key is a character and the value is another trie node

The implementation uses `Belt.Map.String` for efficient character-to-node mapping and ensures immutability by creating new nodes on each operation.

## Development

This project uses:
- ReScript for type-safe implementation
- pnpm for package management
- Vitest for testing

### Setup

```bash
# Install dependencies
pnpm install

# Start development
pnpm watch    # Watch ReScript files

# Build
pnpm build    # Build ReScript files

# Test
pnpm test     # Run tests
```

## Project Structure

```
algorithm-d-rescript/
├── src/
│   ├── Index.res         # Trie implementation
│   └── Index.test.js     # Test suite
├── rescript.json         # ReScript configuration
├── package.json         # Package configuration
├── .gitignore          # Git ignore rules
└── README.md           # Documentation
```

## License

ISC
