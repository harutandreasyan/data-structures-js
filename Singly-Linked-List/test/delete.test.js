import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('delete removes all matching nodes and returns last deleted', () => {
	const list = new LinkedList().fromArray([1, 2, 3, 2, 4])
	if (VERBOSE) console.log('Before delete(2):', list.formatList(list))

	const deleted = list.delete(2)
	if (VERBOSE) console.log('After delete(2):', list.formatList(list))
	if (VERBOSE) console.log('Returned node value:', deleted?.value)

	assert(deleted.value === 2, 'delete() returned wrong node')
	assert(list.toString() === '1,3,4', 'delete() did not remove all occurrences')
})
