class Node{
    constructor(){
        this.left = null;
        this.right = null;
    }
}

export class Tree{
    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(array){
        array.sort((a,b) => a - b); // sort array
        array = new Set(array); // convert to set to remove duplicates
        array = [...array]; // spread back into an array
    }
}