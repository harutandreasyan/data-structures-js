import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('reverse flips the list', () => {
	const list = new LinkedList().fromArray([1, 2, 3, 4])
	if (VERBOSE) console.log('Before reverse():', list.formatList(list))

	list.reverse()
	if (VERBOSE) console.log('After reverse():', list.formatList(list))

	assert(list.toString() === '4,3,2,1', 'reverse() did not invert the list')
})
