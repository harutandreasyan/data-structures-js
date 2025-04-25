import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('deleteHead and deleteTail in normal list', () => {
	const list = new LinkedList().fromArray([7, 8, 9])
	if (VERBOSE) console.log('Original:', list.formatList(list))

	const headDel = list.deleteHead()
	if (VERBOSE)
		console.log(
			'After deleteHead():',
			list.formatList(list),
			'Deleted:',
			headDel?.value
		)
	assert(headDel.value === 7, 'deleteHead returned wrong node')

	const tailDel = list.deleteTail()
	if (VERBOSE)
		console.log(
			'After deleteTail():',
			list.formatList(list),
			'Deleted:',
			tailDel?.value
		)
	assert(tailDel.value === 9, 'deleteTail returned wrong node')
})

runTest('deleteHead clears single-node list', () => {
	const list = new LinkedList().append(42)
	if (VERBOSE) console.log('Single node list:', list.formatList(list))

	const headDel = list.deleteHead()
	if (VERBOSE)
		console.log(
			'After deleteHead():',
			list.formatList(list),
			'Deleted:',
			headDel?.value
		)
	assert(headDel.value === 42, 'deleteHead returned wrong node on single list')
	assert(
		list.head === null && list.tail === null,
		'List not empty after deleting single node'
	)
})
