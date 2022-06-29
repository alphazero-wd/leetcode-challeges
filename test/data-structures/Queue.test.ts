import { Queue } from '../../src/data-structures/Queue'

describe('queue test', () => {
  let queue: Queue<number>
  test('init a queue', () => {
    queue = new Queue<number>()
    expect(queue).toBeInstanceOf(Queue)
    expect(queue.isEmpty).toBeTruthy()
  })

  test('should add an element', () => {
    queue.enqueue(5)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(6)
    queue.enqueue(7)
    expect(queue.peek).toBe(5)
    expect(queue.size).toBe(6)
    expect(queue.isEmpty).toBeFalsy()
  })

  test('should remove an element', () => {
    queue.dequeue()
    queue.dequeue()
    expect(queue.dequeue()).toBe(3)
    expect(queue.peek).toBe(4)
    expect(queue.size).toBe(3)
    expect(queue.isEmpty).toBeFalsy()
  })
})