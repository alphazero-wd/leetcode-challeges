export class Queue<T> {
  items: T[]
  constructor() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return this.size === 0
  }

  enqueue(val: T) {
    this.items.push(val)
  }

  dequeue(): T {
    if (!this.isEmpty)
      return this.items.shift() as T
    throw new Error("Cannot dequeue from an empty queue")
  }

  get peek(): T {
    if (!this.isEmpty)
      return this.items[0] as T
    throw new Error("Cannot access from an empty queue")
  }
}