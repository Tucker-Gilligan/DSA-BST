class BinarySearchTree {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function createBalancedBst(arr, start = 0, end = arr.length) {
  if (start === end) {
    return null;
  }

  const middleIndex = Math.floor((start + end) / 2);
  const middleValue = arr[middleIndex];

  /* 
  THIS RUN TIME CAN BE IMPROVED
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex + 1);
*/

  const leftSubTree = createBalancedBst(arr, start, middleIndex);
  const rightSubTree = createBalancedBst(arr, middleIndex + 1, end);

  const node = new BinarySearchTree(middleValue);
  node.left = leftSubTree;
  node.right = rightSubTree;

  return node;
}
// function createBalancedBst(arr) {
//   if (!arr.length) {
//     return null;
//   }

//   const middleIndex = Math.floor(arr.length / 2);
//   const middleValue = arr[middleIndex];

//   /*
//   THIS RUN TIME CAN BE IMPROVED
//   const left = arr.slice(0, middleIndex);
//   const right = arr.slice(middleIndex + 1);
// */

//   const leftSubTree = createBalancedBst(left);
//   const rightSubTree = createBalancedBst(right);

//   const node = new BinarySearchTree(middleValue);
//   node.left = leftSubTree;
//   node.right = rightSubTree;

//   return node;
// }

//array will always be sorted
console.dir(createBalancedBst([1, 2, 3, 4, 5, 7, 9, 11]), { depth: null });
console.dir(createBalancedBst([-2, -1, 3, 4, 5, 7, 9, 11]), { depth: null });
console.dir(createBalancedBst([1, 2, 3, 4, 5, 7, 7, 9, 11]), { depth: null });
console.dir(createBalancedBst([1, 2, 3, 5, 7]), { depth: null });
console.dir(createBalancedBst([1, 2, 3, 4, 5, 7, 9.5, 11]), { depth: null });
console.dir(createBalancedBst([1, 2, 1e6, 1e7, 1e8, 1e9]), { depth: null });
console.dir(createBalancedBst([1, 2]), { depth: null });
console.dir(createBalancedBst([]), { depth: null });

/* 
                        5
                    2         9
                  1   3   7   11
*/
