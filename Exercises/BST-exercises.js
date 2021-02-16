/*  
Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary search tree, 
what would the tree look like? (Draw the tree, no coding needed here.)
          3
         / \
        1   4
         \   \
          2   6
             / \
            5   9
               /
              7
            
            E A S Y Q U E S T I O N
 

                  E
              /        \
             A          S
              \      /     \
               E    Q       Y
                   /  \    /
                  I    S  U
                   \     /
                    O   T
                   /
                  N


                  E1
            A          S2
                  Q3          Y
                E4    S     U
                  I5      T
                    O6
                  N



*/

/* 
Show how the above trees would look like if you deleted the root of each tree

          2
         / \
        1   4
             \
              6
             / \
            5   9
               /
              7


                    E
                 /     \
                A       S
                     /     \
                    Q       Y
                   /  \    /
                  I    S  U
                   \     /
                    O   T
                   /
                  N

*/

/*
 3. Create a BST class
Walk through the binary search tree code in the curriculum and understand it well. 
Then write a BinarySearchTree class with its core functions 
insert() - done
remove() 
find()

Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. 
Compare your result with the result from the 1st exercise.
Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
Compare your result with the result from the 1st exercise.
*/

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      //if the tree already exists, then start at the root node and compare it to the  key you want to insert.
      //if the new key is less than the nodes key
      //then the new node needs to live in the left hand branch
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    }
    //Similarly, if the new key is greater than the nodes key
    //Do the same thing, but on the right side
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    // If the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      /* If the item you are looking for is less than the root 
       then follow the left child.
       If there is an existing left child, 
       then recursively check its left and/or right child
       until you find the item */
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      /* If the item you are looking for is greater than the root 
       then follow the right child.
       If there is an existing right child, 
       then recursively check its left and/or right child
       until you find the item */
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = succcessor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        /*If the node only has a left child,
      then you replace the node with its left child 
      */
        this._replaceWith(this.left);
      } else if (this.right) {
        /*If the node only has a right child,
     then you replace the node with its left child
     */
        this._replaceWith(this.right);
      } else {
        /* 
    If the node has no children then 
    simply remove it and any references to it 
    by calling "this._replaceWith(null)"
    */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }
}

const BST = new BinarySearchTree();
function createBST(myArray) {
  myArray.map(item => {
    BST.insert(item, item);
  });
}
createBST([3, 1, 4, 6, 9, 2, 5, 7]);
// createBST([1, 2]);
// console.dir(BST, { depth: null });

const EZBST = new BinarySearchTree();
function createEZBST(myString) {
  const myArray = myString.split('');
  myArray.map(item => {
    EZBST.insert(item, item);
  });
}
createEZBST('EASYQUESTION');
// console.dir(EZBST, { depth: null });

// function displayTree(tree) {
//   if (!tree) {
//     return null;
//   }
//   if (tree.left) {
//     console.log(tree.left.key, 'left');
//     displayTree(tree.LEFT);
//   }
//   if (tree.right) {
//     console.log(tree.right.key, 'right');
//     displayTree(tree.right);
//   }
//   return;
// }

// displayTree(EZBST, 'EZBST DISPLAY FUNCTION');

/*
4.
4. Without running this code in your code editor, 
explain what the following program does. 
Show with an example the result of executing this program. 
What is the runtime of this algorithm?
*/

function tree(t) {
  if (!t) {
    return 0;
  }
  console.log(t.left, 'left');
  console.log(t.right);
  return tree(t.left) + t.value + tree(t.right);
}
// console.log(tree(EZBST), 'what is happening?');

//function tree takes in a binary tree?
//if this tree does not exist, return 0
//if it does exist
//add the value of the tree to the outcome
//of the function for the left and right subtrees
//THIS FUNCTION ADDS TOGETHER EACH VALUE AND RETURNS THE SUM

/*
5. Height of a BST
   Write an algorithm to find the height of a binary search tree.
   What is the time complexity of your algorithm?
*/

function findHeight(tree) {
  //returns the height (0) if tree is empty
  if (!tree) {
    return -1;
  }

  //check if there's a left tree
  //check if there's a right tree
  //if there's neither, return 1
  if (!tree.left && !tree.right) {
    return 0;
  }
  //set initial value of height for comparison
  let height = 0;

  //if there's a left tree
  if (tree.left) {
    //define leftHeight as the value of all occurrences of this function
    //this value increments by one each time the function runs
    let leftHeight = 1 + findHeight(tree.left);
    leftHeight > height && (height = leftHeight);
  }
  if (tree.right) {
    //define rightHeight as the value of all occurrences of this function
    //this value increments by one each time the function runs
    let rightHeight = 1 + findHeight(tree.right);
    rightHeight > height && (height = rightHeight);
  }
  return height;
}

console.log(findHeight(BST), 'BST height');
console.log(findHeight(EZBST), 'EZBST height');

/*
6. Is it a BST?
   Write an algorithm to check whether an 
   arbitrary binary tree is a binary search tree, 
   assuming the tree does not contain duplicates.

=====Think this is working, but unsure how to test otherwise=====

   */

//standard BST follows rules of L = lower R = higher

//check if value @ tree.left.key is lower than tree.key
//recursion
function isItBST(tree) {
  //base case
  !tree && false;

  if (tree.left) {
    tree.left.key < tree.key ? isItBST(tree.left) : false;
  }

  //check if value @ tree.right.key is higher than tree.key
  //recursion
  if (tree.right) {
    tree.right.key > tree.key ? isItBST(tree.right) : false;
  }
  return true;
}

console.log(isItBST(BST), 'BST should be true');
console.log(isItBST(EZBST), 'EZBST should be true');

/*
7. 3rd largest node
   Write an algorithm to find the 3rd largest node in a binary search tree.
*/

//move right twice

function thirdLargestNode(tree) {
  tree.remove(tree._findMax().key);
  tree.remove(tree._findMax().key);
  return tree._findMax().key;
}

console.log(thirdLargestNode(BST), 'should be 6');

/*
8. Balanced BST
   Write an algorithm that checks if a BST is balanced 
   (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
*/

//this function is slightly off
// function balancedBst(tree) {
//   const leftTree = tree.left;
//   const rightTree = tree.right;
//   console.log('left tree height', findHeight(leftTree));
//   console.log('right tree height', findHeight(rightTree));
//   Math.abs(findHeight(leftTree) - findHeight(rightTree)) > 1 ||
//   Math.abs(findHeight(rightTree) - findHeight(leftTree)) > 1
//     ? console.log(`this tree is not balanced`)
//     : console.log(`this tree is balanced`);
// }

// balancedBst(BST), 'BST';
// balancedBst(EZBST), 'EZBST';

function balancedBst(tree) {
  let leftCount = 0;
  let rightCount = 0;
  let current = tree;

  while (current.left !== null) {
    current = current.left;
    leftCount++;
  }

  current = tree;
  while (current.right !== null) {
    current = current.right;
    rightCount++;
  }

  return rightCount - leftCount < 1 && leftCount - rightCount < 1;
}

console.log(balancedBst(BST), 'BST balance check');
console.log(balancedBst(EZBST), 'EZBST balance check');

/*
9. Are they the same BSTs?
   You are given two arrays which represent two sequences of keys 
   that are used to create two binary search trees. 
   Write a program that will tell whether the two BSTs will be 
   identical or not without actually constructing the tree. 
   You may use another data structure such as an array or a linked list 
   but don't construct the BST. What is the time complexity of your algorithm? 
   E.g., 
   3, 5, 4, 6, 1, 0, 2 
   and 
   3, 1, 5, 2, 4, 6, 0 
   are two sequences of arrays 
   but will create the exact same BSTs and your program should return true.
*/

//check if root node is the same

function same(myArray1, myArray2) {
  //check if array lengths are the same
  if (myArray1.length !== myArray2.length || myArray1[0] !== myArray2[0]) {
    return false;
  }

  if (myArray1.length === 0 && myArray2.length === 0) {
    return true;
  }
  const rootNode = myArray1[0];
  myArray1.splice(0, 1); //remove root node for comparison
  myArray2.splice(0, 1); //remove root node for comparison

  let rightNode1 = [];
  let leftNode1 = [];

  //compare values sequentially, push into separate arrays - left & right for each array
  myArray1.forEach(node => {
    node > rootNode ? rightNode1.push(node) : leftNode1.push(node);
  });

  let rightNode2 = [];
  let leftNode2 = [];
  //compare values against the root, push into separate arrays - left & right for each array
  myArray2.forEach(node => {
    node > rootNode ? rightNode2.push(node) : leftNode2.push(node);
  });

  //input the arrays recursively to run the check!

  return same(rightNode1, rightNode2) && same(leftNode1, leftNode2);
}

const myArrayA = [3, 5, 4, 6, 1, 0, 2];
const myArrayB = [3, 1, 5, 2, 4, 6, 0];
const diff1 = [4, 6, 1, 2, 3, 7, 2];
const diff2 = [9, 1, 2, 3, 1, 4, 7];

console.log(same(myArrayA, myArrayB), 'ARE THEY THE SAME!? they should be!');
console.log(same(diff1, diff2), 'should be FALSE - not the same');
