
class CircularQueue {
  constructor(bufferSize) {
  	this.buffer = new Array(bufferSize);
  	this.oldestIndex = [0]; // keep track of the oldest item
  	this.mostRecentIndex = -1;
  	this.emptySpots = bufferSize;
  }

  oldestItemIndex() { // return the index of the oldest item
  	return this.oldestIndex.shift();
  }

  isBufferFull() {
  	return this.emptySpots === 0;
  }

  isBufferEmpty() {
  	return this.emptySpots === this.buffer.length;
  }

  nextPositionIndex() {
  	if (this.isBufferFull()) {
  	  return this.oldestItemIndex();
  	} else {
  	  return (this.mostRecentIndex + 1) % this.buffer.length;
  	}
  }

  enqueue(obj) {
  	let nextPositionIndex = this.nextPositionIndex();
  	this.buffer[nextPositionIndex] = obj;
  	this.oldestIndex.push(nextPositionIndex);
  	if (!this.isBufferFull()) {
  	  this.emptySpots -= 1; // replacing 
  	}
  	this.mostRecentIndex = nextPositionIndex;
  }

  dequeue() {
  	let oldestItemIndex = this.oldestItemIndex();
  	if (this.isBufferEmpty()) {
  	  return null;
  	} else {
  	  let removal = this.buffer[oldestItemIndex];	
  	  this.buffer[oldestItemIndex] = null;
  	  this.emptySpots += 1;
  	  return removal;
  	}
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
console.log(queue.dequeue() === 1);
console.log(queue);


queue.enqueue(3);
queue.enqueue(4);
// console.log(queue);

console.log(queue.dequeue() === 2);
// console.log(queue);
// console.log(queue);

queue.enqueue(5);

// console.log(queue);

queue.enqueue(6);

// console.log(queue);

queue.enqueue(7);
// console.log(queue);

console.log(queue.dequeue() === 5);
// console.log(queue);
console.log(queue.dequeue() === 6);
// console.log(queue);

console.log(queue.dequeue() === 7);
// console.log(queue);

console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);





