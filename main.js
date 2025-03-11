import {Tree} from "./BST.js";

const getRandom = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNums = (min, max)=>{
    const nums = [];
    const amtOfNums = getRandom(3, 7);
    for (let i = 0; i < amtOfNums; i++){
        nums.push(getRandom(min, max));
    }
    return nums;
}

const tree = new Tree(randomNums(1, 100));

tree.prettyPrint(tree.root);
console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");

console.log("Level Order:");
tree.levelOrder(node => console.log(node.data));

console.log("\nInorder:");
tree.inOrder(node => console.log(node.data));

console.log("\nPreorder:");
tree.preOrder(node => console.log(node.data));

console.log("\nPostorder:");
tree.postOrder(node => console.log(node.data));

randomNums(1000, 10000).forEach((num)=>{
    tree.insert(num);
});

tree.prettyPrint(tree.root);
console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");

tree.rebalance();
tree.prettyPrint(tree.root);
console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");

console.log("Level Order:");
tree.levelOrder(node => console.log(node.data));

console.log("\nInorder:");
tree.inOrder(node => console.log(node.data));

console.log("\nPreorder:");
tree.preOrder(node => console.log(node.data));

console.log("\nPostorder:");
tree.postOrder(node => console.log(node.data));

// const val1 = 35478;
// const val2 = 736;
// const val3 = 67;

// tree.insert(val1);
// tree.insert(val2);
// console.log(tree.insert(val1).message ?? "");
// tree.prettyPrint(tree.root);
// console.log(tree.deleteItem(val1) ? `Node Deleted: ${val1}` : "Node Not Found");
// tree.prettyPrint(tree.root);
// console.log(`Find ${val1}:`,tree.find(val1));
// console.log(`Find ${val2}:`,tree.find(val2));

// // console.log("Level Order:");
// // tree.levelOrder(node => console.log(node.data));

// // console.log("\nInorder:");
// // tree.inOrder(node => console.log(node.data));

// // console.log("\nPreorder:");
// // tree.preOrder(node => console.log(node.data));

// // console.log("\nPostorder:");
// // tree.postOrder(node => console.log(node.data));

// console.log(`${tree.root.data} Height:`,tree.height(tree.root));
// console.log(`${val2} Height:`,tree.height(tree.find(val2)));
// console.log(`${val3} Height:`,tree.height(tree.find(val3)));

// console.log(`${tree.root.data} Depth:`,tree.depth(tree.root));
// console.log(`${val2} Depth:`,tree.depth(tree.find(val2)));
// console.log(`${val3} Depth:`,tree.depth(tree.find(val3)));

// tree.prettyPrint(tree.root);
// console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");
// console.log(tree.insert(323).message ?? "Inserted 323");

// console.log("\nTree Structure:");
// tree.prettyPrint(tree.root);
// console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");

// console.log(tree.insert(735).message ?? "Inserted 735");
// console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");
// tree.rebalance();
// tree.prettyPrint(tree.root);
// console.log(tree.isBalanced() ? "Is balanced" : "Is not balanced");