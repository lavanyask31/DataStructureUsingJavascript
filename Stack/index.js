class Stack {
  constructor() {
    this.items = [];
  }
  //insert into the top of the stack
  push(element) {
    this.items.push(element);
  }

  //delete from the end of the list
  pop() {
    return this.items.pop();
  }

  //fetch top item in the list
  peek() {
    return this.items[this.items.length - 1];
  }

  // check stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // fetch size of the stack
  size() {
    return thisfe.items.length;
  }
  // fetch all the item from the stack
  print() {
    console.log("items", this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());
stack.print();
stack.pop();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
