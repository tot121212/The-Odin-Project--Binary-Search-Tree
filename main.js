import {Tree} from "./BST.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(736);
tree.insert(73366);
tree.insert(73);
tree.prettyPrint(tree.root);
//console.log(tree);