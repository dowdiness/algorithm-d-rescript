/* TypeScript file generated from Trie.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as TrieJS from './Trie.res.mjs';

import type {t as Dict_t} from './Dict.gen';

export type Trie_node = { readonly isEndOfWord: boolean; readonly children: Dict_t<Trie_node> };

export type Trie_t = Trie_node;

export const Trie_makeNode: () => Trie_node = TrieJS.Trie.makeNode as any;

export const Trie_insert: (root:Trie_node, word:string) => Trie_node = TrieJS.Trie.insert as any;

export const Trie_search: (root:Trie_node, word:string) => boolean = TrieJS.Trie.search as any;

export const Trie_startsWith: (root:Trie_node, prefix:string) => boolean = TrieJS.Trie.startsWith as any;

export const Trie_make: () => Trie_node = TrieJS.Trie.make as any;

export const Trie: {
  startsWith: (root:Trie_node, prefix:string) => boolean; 
  insert: (root:Trie_node, word:string) => Trie_node; 
  makeNode: () => Trie_node; 
  search: (root:Trie_node, word:string) => boolean; 
  make: () => Trie_node
} = TrieJS.Trie as any;
