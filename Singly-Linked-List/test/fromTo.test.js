import { runTest, assert, VERBOSE } from './helpers.js'
import LinkedList from '../SinglyLinkedList.js'

runTest('fromArray, toArray', () => {
	const input = [10, 20, 30]
	const list = new LinkedList().fromArray(input)
	if (VERBOSE) console.log('After fromArray:', list.formatList(list))

	const values = list.toArray().map((node) => node.value)
	if (VERBOSE) console.log('toArray values:', values)
	assert(
		JSON.stringify(values) === JSON.stringify(input),
		'toArray should match original array'
	)
})

runTest('toString with and without callback', () => {
	const list = new LinkedList().fromArray([10, 20, 30])

	const plain = list.toString()
	if (VERBOSE) console.log('toString():', plain)
	assert(plain === '10,20,30', 'toString without callback should join values')

	const withCallback = list.toString((v) => `#${v}`)
	if (VERBOSE) console.log('toString(callback):', withCallback)
	assert(
		withCallback === '#10,#20,#30',
		'toString with callback should format values'
	)
})
