# Algorithm D ReScript

A ReScript implementation of Algorithm D unification algorithm that can be used in both browser and Node.js environments.

## Installation

```bash
pnpm add algorithm-d-rescript
```

## Usage

The library exports three main functions:
- `makeVar`: Creates a variable term
- `makeConstructor`: Creates a constructor term with arguments
- `unify`: Performs unification of two terms

### In Node.js (ESM)

```javascript
import { makeVar, makeConstructor, unify } from 'algorithm-d-rescript';

const x = makeVar('x');
const cons = makeConstructor('cons', [makeVar('y')]);
const result = unify(x, cons);
```

### In Browser

```html
<script type="module">
  import { makeVar, makeConstructor, unify } from 'algorithm-d-rescript';

  const x = makeVar('x');
  const cons = makeConstructor('cons', [makeVar('y')]);
  const result = unify(x, cons);
</script>
```

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
│   ├── Index.res         # Main implementation
│   └── Index.test.js     # Test suite
├── rescript.json         # ReScript configuration
├── package.json         # Package configuration
├── .gitignore          # Git ignore rules
└── README.md           # Documentation
```

## License

ISC
