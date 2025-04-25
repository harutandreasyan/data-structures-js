import Node from './linkedListNode.js'
import Comparator from './utils/Comparator.js'

// Singly Linked List
export default class LinkedList {
	constructor(comparatorFunction) {
		// First (head) node
		this.head = null
		// Last (tail) node
		this.tail = null
		// Node comparison function
		this.compare = new Comparator(comparatorFunction)
	}

	// Adds value to the beginning of the list
	prepend(value) {
		// Create new head node with link to previous head
		// (new node becomes the first)
		const newNode = new Node(value, this.head)
		this.head = newNode

		// If there is no tail yet let's make new node a tail.
		if (!this.tail) {
			this.tail = newNode
		}

		// Enables method chaining
		return this
	}

	// Inserts value at specified index
	append(value) {
		const newNode = new Node(value)

		// If there is no head yet let's make new node a head.
		if (!this.head) {
			this.head = newNode
			this.tail = newNode

			return this
		}

		// Attach new node to the end of linked list.
		this.tail.next = newNode
		this.tail = newNode

		return this
	}

	// Inserts value at specified index
	insert(value, rawIndex) {
		// Normalize index
		const index = rawIndex < 0 ? 0 : rawIndex
		// Handle index 0 case
		if (index === 0) {
			this.prepend(value)
		} else {
			let count = 1
			// Start from head node
			let currentNode = this.head
			const newNode = new Node(value)

			while (currentNode) {
				if (count === index) break
				currentNode = currentNode.next
				count += 1
			}
			if (currentNode) {
				// Insert between current and current.next
				newNode.next = currentNode.next
				currentNode.next = newNode
			} else {
				// Append if index not found
				return this.append(value)
			}
		}
		return this
	}

	// Removes node by value
	delete(value) {
		if (!this.head) {
			return null
		}

		let deletedNode = null

		// If the head must be deleted then make next node that is different
		// from the head to be a new head.
		while (this.head && this.compare.equal(this.head.value, value)) {
			deletedNode = this.head
			this.head = this.head.next
		}

		let currentNode = this.head

		if (currentNode !== null) {
			// If next node must be deleted then make next node to be a next next one.
			while (currentNode.next) {
				if (this.compare.equal(currentNode.next.value, value)) {
					deletedNode = currentNode.next
					currentNode.next = currentNode.next.next
				} else {
					currentNode = currentNode.next
				}
			}
		}

		// Check if tail must be deleted.
		if (this.compare.equal(this.tail.value, value)) {
			this.tail = currentNode
		}

		return deletedNode
	}

	// Removes tail node
	deleteTail() {
		const deletedTail = this.tail

		// There is only one node in linked list.
		if (this.head === this.tail) {
			this.head = null
			this.tail = null

			return deletedTail
		}

		// If there are many nodes in linked list...

		// Rewind to the last node and delete "next" link for the node before the last one.
		let currentNode = this.head
		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null
			} else {
				currentNode = currentNode.next
			}
		}

		this.tail = currentNode
		return deletedTail
	}

	// Removes head node
	deleteHead() {
		if (!this.head) {
			return null
		}

		const deletedHead = this.head

		if (this.head.next) {
			this.head = this.head.next
		} else {
			// Clear list when only one node
			this.head = null
			this.tail = null
		}

		return deletedHead
	}

	// Finds node by value or callback
	find({ value = undefined, callback = undefined }) {
		if (!this.head) {
			return null
		}

		let currentNode = this.head

		while (currentNode) {
			// If callback is specified then try to find node by callback.
			if (callback && callback(currentNode.value)) {
				return currentNode
			}

			// If value is specified then try to compare by value..
			if (value !== undefined && this.compare.equal(currentNode.value, value)) {
				return currentNode
			}

			currentNode = currentNode.next
		}

		return null
	}

	// Reverses the list
	reverse() {
		let currNode = this.head
		let prevNode = null
		let nextNode = null

		while (currNode) {
			// Store next node.
			nextNode = currNode.next

			// Change next node of the current node so it would link to previous node.
			currNode.next = prevNode

			// Move prevNode and currNode nodes one step forward.
			prevNode = currNode
			currNode = nextNode
		}

		// Reset head and tail.
		this.tail = this.head
		this.head = prevNode

		return this
	}

	// Creates list from array
	fromArray(values) {
		values.forEach((value) => this.append(value))
		return this
	}

	// Converts list to array
	toArray() {
		const nodes = []
		let currentNode = this.head
		while (currentNode) {
			nodes.push(currentNode)
			currentNode = currentNode.next
		}

		return nodes
	}

	// Returns string representation
	toString(callback) {
		return this.toArray()
			.map((node) => node.toString(callback))
			.toString()
	}

	formatList(list) {
		let result = ''
		let current = list.head
		while (current) {
			result += `${current.value}->`
			current = current.next
		}
		return result + 'null'
	}
}
