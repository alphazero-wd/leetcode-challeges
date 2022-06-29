export class PriorityQueue<T extends string | number> {
  private items: T[]
  constructor() {
    this.items = []
  }

  private parentIndex(i: number): number {
    return Math.floor((i - 1) / 2)
  }

  private leftChildIndex(i: number): number {
    return 2 * i + 1
  }

  private rightChildIndex(i: number): number {
    return 2 * i + 2
  }

  private parent(i: number): T {
    return this.items[this.parentIndex(i)] as T
  }

  private leftChild(i: number): T {
    return this.items[this.leftChildIndex(i)] as T
  }

  private rightChild(i: number): T {
    return this.items[this.rightChildIndex(i)] as T
  }
  get size() {
    return this.items.length;
  }

  add(val: T, nums: T[] = this.items) {
    nums.push(val)
    this.swim(this.size - 1)
  }

  private swap(i: number, j: number) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
  }


  swim(i: number) {
    while (this.parentIndex(i) >= 0 && this.parent(i) > (this.items[i] as T)) {
      this.swap(i, this.parentIndex(i))
      i = this.parentIndex(i)
    }
  }

  sink(i: number) {
    while (this.leftChildIndex(i) < this.size) {
      let j = this.leftChildIndex(i)
      if (j + 1 < this.size && this.leftChild(i) > this.rightChild(i)) j++
      if (this.items[j] >= this.items[i]) break;
      this.swap(i, j)
      i = j
    }
  }
  get peek(): T {
    return this.items[0]
  }

  poll() {
    this.swap(0, this.size - 1)
    const peek = this.items.pop()
    this.sink(0)
    return peek
  }

  get isEmpty() { return this.size === 0 }
}