class Queue {
  constructor() {
    this.items = [];
  }

  //insert element at the end of the Queue (rear end)
  enqueue(element) {
    this.items.push(element);
  }

  // delete the item from front end of the queue
  dequeue() {
    return this.items.shift();
  }

  //check whether the  queue is empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  //return elemnt from the front of the queue without deleting it;
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  //no of elemnts in the queue
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
queue.peek();

queue.print();
