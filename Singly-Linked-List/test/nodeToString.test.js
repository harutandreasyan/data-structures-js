// test/09_nodeToString.test.js

import { runTest, assert, VERBOSE } from './helpers.js'
import Node from '../LinkedListNode.js'

runTest('Node.toString with callback', () => {
	const node = new Node('xyz')
	const out = node.toString((v) => v.toUpperCase())
	if (VERBOSE) console.log('Node.toString callback output:', out)
	assert(out === 'XYZ', 'Node.toString(callback) did not transform value')
})
