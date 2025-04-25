export default class Node {
	constructor(value, next = null) {
		// Node value
		this.value = value
		// Reference to next node
		this.next = next
	}

	// Returns string representation of the node
	// Accepts custom stringify function
	toString(callback) {
		return callback ? callback(this.value) : `${this.value}`
	}
}
