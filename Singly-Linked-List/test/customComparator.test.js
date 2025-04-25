import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('custom Comparator affects delete', () => {
	// comparator sorts descending: larger values considered "smaller"
	const list = new LinkedList((a, b) => b - a)
	list.fromArray([1, 2, 3, 2, 1])
	if (VERBOSE) console.log('With custom comparator:', list.formatList(list))

	list.delete(1)
	if (VERBOSE) console.log('After delete(1):', list.formatList(list))

	// Under this comparator, deletion removes highest matching first
	assert(list.toString() === '2,3,2', 'Custom comparator delete logic failed')
})
