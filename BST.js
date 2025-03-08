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
        this.init(array);
    }

    process(array){
        let sorted = [...(new Set(array))]; // remove dups and spread back to array
        sorted.sort((a,b) => a - b); // sort array
        return sorted;
    }

    //[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
    //[1,3,4,5,7,8,9,23,67,324,6345]
    buildTree(array, start, end){
        if (start>end) return null;
        let mid = Math.floor((start+end)/2);
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid-1);
        root.right = this.buildTree(array, mid+1, end);
        return root;
    }

    init(array){
        //console.log(array);
        const sorted = this.process(array);
        console.log("Sorted Array:",sorted);
        this.root = this.buildTree(sorted, 0, sorted.length-1);
    }

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
        if (!node) return false;
        if (!this.root) return false;
        if (value === node.value){
            if (!node.left && !node.right) node = null; // no children
            else if (node.left && node.right){ // both children
                let isLeft;
                parent.left === node ? isLeft = true : isLeft = false; // is node the left or the right node of the parent
                // recurse through node.right to the left until left is null
                // the node that left === null is the nextLargest
                // replace node with nextLargest
                    // if (nextLargest.right)  nextLargest.parent.left = right;
            }
            else if (node.left){ // only left child
                if (!parent) this.root = node.left;
                else parent.left = node.left;
            } else if (node.right){ // only right child
                if (!parent) this.root = node.right;
                else parent.right = node.right;
            }
            return true;
        } else if (value < node.value){
            return this.deleteItem(value, node.left, node);
        } else {
            return this.deleteItem(value, node.right, node);
        }
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
}


 