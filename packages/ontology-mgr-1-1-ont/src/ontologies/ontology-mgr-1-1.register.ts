/**
 * Registers this ontology.
 *
 * Kept out of `ontology-mgr-1-1.ts` because registration needs that module's whole export
 * namespace, and a module cannot import itself once a bundler is involved: Rollup treats
 * a static self-reference as a circular import and elides it, so the binding is undefined
 * at runtime and the app dies at boot with `_this is not defined`. `tsc` preserves it,
 * which is why the pattern worked for as long as packages were only built with `tsc`.
 *
 * From a sibling module the same import is ordinary and survives.
 */
import * as terms from './ontology-mgr-1-1.js';
import {linkedOntology} from '../package.js';
import {loadData, ns} from './ontology-mgr-1-1.js';

linkedOntology(terms, ns, 'ontology-mgr-1-1', loadData, ['../data/ontology-mgr-1-1.ttl']);
