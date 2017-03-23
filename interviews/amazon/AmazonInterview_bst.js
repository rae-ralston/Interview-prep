let node = class () {
    constructor(value) {
        this.value = value
        this.right = null // less
        this.left = null  // more
    };
};

let BST = class() {
    constructor() {
        this.head = null
    };
    
    add(num) {
        if(this.head === null) {
            this.head = new node(num)    
        };
        let nextLevelHead = this.head
        let addValToTree = (num, head) => {   
            if(this.head.value < num && this.head.right === null){
                this.right = new node(num)
            } else if (this.head.value > num && this.head.left === null) {
                this.left = new node(num)
            } else if (this.head.left !== null && this.head.value > num) {
                nextLevelHead = this.head.left
                addValToTree(num, nextLevelHead)
            } else if (this.head.value < num && this.head.right !== null) {
                nextLevelHead = this.head.right
                addValToTree(num, nextLevelHead)
            };     
        };  
    };
    
    search(num) {
        let currentNode
        let searchBST = (num, currentNode) => {
            if (this.head.value === num) { return true };
            if(num > this.head.value) {
                currentNode = this.head.left
                searchBST(currentNode)
            } else {
                currentNode = this.head.right
                searchBST(currentNode)
            };
            return false
        };
    };
};