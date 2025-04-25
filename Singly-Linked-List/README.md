![List Structure](./singly-linked-list.png)

## Definition

```
A singly linked list is a type of linked list that is unidirectional, that is,
it can be traversed in only one direction from head to the last node (tail).

Each element in a linked list is called a node. A single node contains data and a pointer <br>
to the next node which helps in maintaining the structure of the list.
```

```
The first node is called the head; it points to the first node of the list and helps us access every other element in the list. Br>
The last node, also sometimes called the tail, points to NULL which helps us in determining when the list ends.
```

## Complexities

### Time Complexity

| READ | SEARCH | INSERT | DELETE |
| :--: | :----: | :----: | :----: |
| O(n) |  O(n)  |  O(1)  |  O(n)  |

## Complexities

### Space Complexity

O(N)


Below table represents the time and space complexities for various operations on a linked list:
|  OPERATION                    | TIME COMPLEXITY | AUXILIARY SPACE | EXPLANATION |
|:-----------------------------:|:---------------:|:---------------:|:-----------:|
| Insertion at Beginning        | O(1)            | O(1)            |Constant-time pointer updates. |             |
| Insertion at End              | O(N)            | O(1)            |Traversal required to find the last node.            |
| Insertion at Position         | O(N)            | O(1)            |Traversal to the desired position,<br>then constant-time pointer updates.             |
| Deletion at Beginning         | O(1)            | O(1)            | Constant-time pointer update.            |
| Deletion at End               | O(N)            | O(1)            | Traversal required to find the second last node.            |
| Deletion at Position          | O(N)            | O(1)            | Traversal to the desired position,<br>then constant-time pointer updates.            |
| Searching in Linked list      | O(N)            | O(1)            | Traversal through the list to find the desired value.            |


## Complexity Analysis

### Insertion at the Beginning of Linked List

- **Time Complexity**: `O(1)`

  - **Reason**:
    - Create a new node.
    - Set the next pointer of the new node to the current head.
    - Update the head to point to the new node.
    - Constant-time pointer manipulations.

- **Auxiliary Space**: `O(1)`
  - **Reason**: Only one new node is created (no extra memory proportional to input size).
- **Time Complexity**: `O(1)`  
  - **Reason**:  
    - Create a new node.  
    - Set the next pointer of the new node to the current head.  
    - Update the head to point to the new node.  
    - Constant-time pointer manipulations.  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: Only one new node is created (no extra memory proportional to input size).  

---

### Insertion at the End of Linked List

- **Time Complexity**: `O(n)`

  - **Reason**:
    - Traverse the entire list to find the last node (linear time).
    - Update the last node's next pointer.

- **Auxiliary Space**: `O(1)`
  - **Reason**: Only one new node is created.
- **Time Complexity**: `O(n)`  
  - **Reason**:  
    - Traverse the entire list to find the last node (linear time).  
    - Update the last node's next pointer.  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: Only one new node is created.  

---

### Insertion at a Specific Position of Linked List

- **Time Complexity**: `O(n)`

  - **Reason**:
    - Traverse to the node before the desired position (worst-case `O(n)`).
    - Update pointers for the new node.

- **Auxiliary Space**: `O(1)`
  - **Reason**: Only one new node is created.
- **Time Complexity**: `O(n)`  
  - **Reason**:  
    - Traverse to the node before the desired position (worst-case `O(n)`).  
    - Update pointers for the new node.  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: Only one new node is created.  

---

### Deletion at the Beginning of Linked List

- **Time Complexity**: `O(1)`

  - **Reason**: Update the head pointer to the next node.

- **Auxiliary Space**: `O(1)`
  - **Reason**: No additional memory required.
- **Time Complexity**: `O(1)`  
  - **Reason**: Update the head pointer to the next node.  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: No additional memory required.  

---

### Deletion at the End of Linked List

- **Time Complexity**: `O(n)`

  - **Reason**:
    - Traverse the list to find the second-to-last node (linear time).
    - Update its next pointer to `null`.

- **Auxiliary Space**: `O(1)`
  - **Reason**: No additional memory required.
- **Time Complexity**: `O(n)`  
  - **Reason**:  
    - Traverse the list to find the second-to-last node (linear time).  
    - Update its next pointer to `null`.  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: No additional memory required.  

---

### Deletion at a Specific Position of Linked List

- **Time Complexity**: `O(n)`

  - **Reason**:
    - Traverse to the node before the target position (worst-case `O(n)`).
    - Bypass the node to delete.

- **Auxiliary Space**: `O(1)`
  - **Reason**: No additional memory required.
- **Time Complexity**: `O(n)`  
  - **Reason**:  
    - Traverse to the node before the target position (worst-case `O(n)`).  
    - Bypass the node to delete.  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: No additional memory required.  

---

### Search for a Value in Linked List

- **Time Complexity**: `O(n)`

  - **Reason**: Traverse the list until the value is found (worst-case `O(n)`).

- **Auxiliary Space**: `O(1)`
  - **Reason**: No additional memory required.
- **Time Complexity**: `O(n)`  
  - **Reason**: Traverse the list until the value is found (worst-case `O(n)`).  

- **Auxiliary Space**: `O(1)`  
  - **Reason**: No additional memory required.  
