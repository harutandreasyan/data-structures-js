import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('prepend & append', () => {
	// Test prepend
	const list1 = new LinkedList()
	list1.prepend(2)
	if (VERBOSE) console.log('After prepend(2):', list1.formatList(list1))
	list1.prepend(1)
	if (VERBOSE) console.log('After prepend(1):', list1.formatList(list1))
	assert(list1.head.value === 1, 'Head should be 1 after two prepends')
	assert(list1.tail.value === 2, 'Tail should be 2 after two prepends')

	// Test append
	const list2 = new LinkedList()
	list2.append(1)
	if (VERBOSE) console.log('After append(1):', list2.formatList(list2))
	list2.append(2)
	if (VERBOSE) console.log('After append(2):', list2.formatList(list2))
	assert(list2.head.value === 1, 'Head should be 1 after two appends')
	assert(list2.tail.value === 2, 'Tail should be 2 after two appends')
})
