# Vocabulary

- `Root Node:` Top most node
- `Leaf Nodes:` No children nodes
- `Subtrees:` Nodes which have their own leaves

- `Binary Tree:` Trees which can only have 1 or two children: usually the left child and the right child
- `Binary Search Tree:` Binary tree where values are ordered

### Rules

- Nodes on left node are always smaller less than
- Nodes on the right are always greater than

### Ideal

- Balanced on the left and right
- Known as balanced trees
- Performance of tree improves when tree is balanced

### Working with BST

- Find lowest value: keep moving left
- Find highest value: keep moving right

#### Almost always start at root node, and decide whether to go left or right

##### Least Efficient

- Hit O(n) performance when it looks like a SLL
- Example: Sorted list

##### Most efficient (insertion)

- O(log n)

##### Find a particular variable in a BST

```
while (node < searchItem){
   move left
}
else {
    move right
}
```

#### Removing Children

- If no children, you can remove the value
- If one child, replace deleted with the child
- If 2 children, replace the node with the LARGEST value from the LEFT subtree or SMALLEST from RIGHT subtree
- RIGHT MOST NODE of the LEFT SUBTREE
- LEFT MOST NODE of the RIGHT SUBTREE

### REAL LIFE EXAMPLE

- Databases
- Anywhere we have values in a sorted order
