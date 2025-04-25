![List Structure](./singly-linked-list.png)

## Complexities

### Time Complexity
|  READ  | SEARCH | INSERT | DELETE |
|:------:|:------:|:------:|:------:|
| O(n)   | O(n)   | O(1)   |O(n)    |

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
