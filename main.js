import {Tree} from "./BST.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(736);
tree.insert(73366);
let val = 35478;
tree.insert(val);
tree.prettyPrint(tree.root);
console.log(tree.deleteItem(val) ? `Node Deleted: ${val}` : "Node Not Found");
tree.prettyPrint(tree.root);
console.log(tree.find(val));
console.log(tree.find(736));

// console.log("Level Order:");
// tree.levelOrder(node => console.log(node.data));

// console.log("\nInorder:");
// tree.inOrder(node => console.log(node.data));

// console.log("\nPreorder:");
// tree.preOrder(node => console.log(node.data));

// console.log("\nPostorder:");
// tree.postOrder(node => console.log(node.data));

console.log("Root Height:",tree.height(tree.root));
console.log("736 Height:",tree.height(tree.find(736)));

console.log("Root Depth:",tree.depth(tree.root));
console.log("736 Depth:",tree.depth(tree.find(736)));

console.log("\nTree Structure:");
tree.prettyPrint(tree.root);