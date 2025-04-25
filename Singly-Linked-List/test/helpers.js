/** Toggle detailed logs on/off */
export const VERBOSE = true

let testCount = 1

export function runTest(name, fn) {
	console.group(`🔍 TEST ${testCount++}: ${name}`)
	try {
		fn()
		console.log('✅ PASSED')
		console.log('')
	} catch (e) {
		console.error(`❌ FAILED — ${e.message}`)
		console.log('')
	}
	console.groupEnd()
}

export function assert(condition, message) {
	if (!condition) throw new Error(message)
}

console.log('— Starting SinglyLinkedList tests —')
console.log('')
