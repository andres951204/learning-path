/**
 * 
 * Iterator Coding Exercise
Given the following definition of a Node , 
please implement preorder traversal right inside Node. 
The sequence returned should be the sequence of values, not their containing nodes.
 */

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    *preorder() {
        yield this.value;

        if (this.left) {
            for (let value of this.left.preorder()) {
                yield value;
            }
        }

        if (this.right) {
            for (let value of this.right.preorder()) {
                yield value;
            }
        }
    }
}