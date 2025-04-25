import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('find by value and callback', () => {
	const list = new LinkedList().fromArray([1, 2, 3, 4, 5])
	if (VERBOSE) console.log('List for find:', list.formatList(list))

	const nodeByValue = list.find({ value: 2 })
	if (VERBOSE) console.log('find({value:2}):', nodeByValue?.value)
	assert(nodeByValue.value === 2, 'find by value returned wrong node')

	const nodeByCallback = list.find({ callback: (v) => v === 4 })
	if (VERBOSE) console.log('find({callback}):', nodeByCallback?.value)
	assert(nodeByCallback.value === 4, 'find by callback returned wrong node')

	const notFound = list.find({ value: 999 })
	if (VERBOSE) console.log('find({value:999}):', notFound)
	assert(notFound === null, 'find should return null when nothing matches')
})
