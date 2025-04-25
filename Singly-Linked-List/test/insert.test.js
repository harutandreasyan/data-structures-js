// test/03_insert.test.js

import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('insert at head, middle, and beyond tail', () => {
	const list = new LinkedList().fromArray([1, 2, 4])
	if (VERBOSE) console.log('Initial:', list.formatList(list))

	list.insert(0, 0)
	if (VERBOSE) console.log('After insert(0, 0):', list.formatList(list))

	list.insert(3, 3)
	if (VERBOSE) console.log('After insert(3, 3):', list.formatList(list))

	list.insert(5, 10)
	if (VERBOSE) console.log('After insert(5, 10):', list.formatList(list))

	assert(
		list.toString() === '0,1,2,3,4,5',
		'Insert did not produce expected sequence'
	)
})
