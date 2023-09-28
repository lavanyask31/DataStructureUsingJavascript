class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(element) {
    // increased times of enqueue and dequeue will lead to memory leak... that's why circular queue came...
    //or after dequeue if the object is empty then we need to set the index of front and rear into 0
    console.log("front:", this.front);
    const item = this.items[this.front];
    if (!item) return;
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(1);
console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
