export class Stack<T> {
  private items: T[]
  constructor() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return this.size === 0
  }

  push(val: T) {
    this.items.push(val)
  }

  pop(): T {
    if (!this.isEmpty)
      return this.items.pop() as T
    throw new Error("Cannot pop from an empty stack")
  }

  get peek(): T {
    if (!this.isEmpty)
      return this.items[this.size - 1] as T
    throw new Error("Cannot access from an empty stack")
  }
}