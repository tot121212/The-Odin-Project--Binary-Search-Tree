class Node{
    constructor(data){
        this.data = data ?? null;
        this.left = null;
        this.right = null;
    }
}

// balanced binary tree
export class Tree{
    constructor(array){
        const sorted = this.process(array);
        console.log("Sorted Array:",sorted);
        this.root = this.buildTree(sorted, 0, sorted.length-1);
        console.log("Root built:", this.root);
    }

    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

    buildTree(array, start, end){
        if (start>end) return null;
        let mid = Math.floor((start+end)/2);
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid-1);
        root.right = this.buildTree(array, mid+1, end);
        return root;
    }

    process(array){
        let sorted = [...(new Set(array))]; // remove dups and spread back to array
        sorted.sort((a,b) => a - b); // sort array
        return sorted;
    }

    //[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
    //[1,3,4,5,7,8,9,23,67,324,6345]
    insert(value, node = this.root){
        if (!this.root){
            this.root = new Node(value);
            return true;
        }
        if (value === node.data) return false;
        let nextNode, isRight;

        if (value < node.data) {
            nextNode = node.left; 
            isRight = false;
        }
        else if (value > node.data) {
            nextNode = node.right; 
            isRight = true;
        }

        if (!(nextNode instanceof Node)) {
            nextNode = new Node(value);
            isRight ? node.right = nextNode : node.left = nextNode;
        } else {
            this.insert(value, nextNode);
        }
        return true;
    }

    deleteItem(value, node = this.root, parent = null){
        if (!(node instanceof Node)) return false; // node does not exist
        if (value === node.data){
            if (!node.left && !node.right) { // no children
                if (parent){
                    parent.left === node ? parent.left = null : parent.right = null; // null out parent left or right
                } else {
                    this.root = null;
                }
            } else if (node.left && node.right){ // both children
                let nextLargest = node.right; // start with right node
                let nextLargestParent = node; // store parent of that node
                while (nextLargest.left){ // search through left nodes until left is null
                    nextLargestParent = nextLargest; // set current next largest to the parent
                    nextLargest = nextLargest.left; // set nextLargest to actual nextLargest
                }
                if (nextLargest.right) nextLargestParent.left = nextLargest.right; // if that node has a right, make its right into the left child of the closestLargest instead of node itself
                node.data = nextLargest.data; // now we have a decoupled nextLargest node, use that to set data of node
            } else { // only one child
                const child = node.left || node.right;
                if (!parent) this.root = child;
                else (parent.left === node) ? parent.left = child : parent.right = child;
            }
            return true;
        } 
        else if (value < node.data){
            return this.deleteItem(value, node.left, node);
        } 
        else { // value > node.data
            return this.deleteItem(value, node.right, node);
        }
    }

    find(value, node = this.root){
        if (!node) return null;
        if (value === node.data) return node;
        else if (value < node.data) return this.find(value, node.left);
        else return this.find(value, node.right);
    }
    
    // call a callback on each node in the tree, in level order traversal
    // lets try iteration for this one
    levelOrder(callback){
        if (!callback) throw new Error("No callback provided");
        const queue = [this.root, null];
        while (queue.length > 1){
            let node = queue.shift();
            if (node === null) {
                console.log("Delimiter reached");
                callback(null);
                queue.push(null);
                continue;
            }
            callback(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    // left root right order
    inOrder(callback){
        if (!callback) throw new Error("No callback provided");
        const recurse = (node)=>{
            if (node.left) recurse(node.left);
            callback(node);
            if (node.right) recurse(node.right);
        };
        recurse(this.root);
    }

    preOrder(callback){
        if (!callback) throw new Error("No callback provided");
        const recurse = (node)=>{
            callback(node);
            if (node.left) recurse(node.left);
            if (node.right) recurse(node.right);
        };
        recurse(this.root);
    }

    postOrder(callback){
        if (!callback) throw new Error("No callback provided");
        const recurse = (node)=>{
            if (node.left) recurse(node.left);
            if (node.right) recurse(node.right);
            callback(node);
        };
        recurse(this.root);
    }

    //      1  (Height 2, Depth 0)  <- Root
    //     / \
    //    2   3  (Height 1, Depth 1)
    //   / \   \
    //  4   5   6  (Height 0, Depth 2)

    height(node){
        if (!node) return -1;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        let height = Math.max(leftHeight, rightHeight)+1;
        return height;
    }

    // the number of edges in the path from given node to tree root
    depth(node){
        // search tree for node, saving the steps it took to get there
        let depth =- 1;
        const recurse = (n, currentDepth)=>{
            if (n === null) return;
            if (n === node){
                depth = currentDepth;
                return;
            }
            recurse(n.left, currentDepth + 1);
            recurse(n.right, currentDepth + 1);
        };
        recurse(this.root, 0);
        return depth
    }
}


 