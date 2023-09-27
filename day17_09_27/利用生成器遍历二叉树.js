class BinaryTree {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }


    // 先序遍历 
    *[Symbol.iterator]() {
        yield this.value;
        if (this.left) {
            yield* this.left;
        }
        if (this.right) {
            yield* this.right;
        }
    }
}

//测试用例
//以下代码创建一个二叉树
const tree = new BinaryTree(
    "a",
    new BinaryTree("b", new BinaryTree("c"), new BinaryTree("d")),
    new BinaryTree("e")
);

//并通过for-of对二叉树进行迭代：
for (const x of tree) {
    console.log(x);
}
  // Output:
  // a
  // b
  // c
  // d
  // e