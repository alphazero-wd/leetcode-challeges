import { PriorityQueue } from '../../src/data-structures/PriorityQueue'

describe('pq test', () => {
  let pq: PriorityQueue<number>
  test('init a pq', () => {
    pq = new PriorityQueue<number>()
    expect(pq).toBeInstanceOf(PriorityQueue)
    expect(pq.isEmpty).toBeTruthy()
  })

  test('should add an element', () => {
    pq.add(5)
    pq.add(2)
    pq.add(3)
    pq.add(4)
    pq.add(6)
    pq.add(7)
    expect(pq.peek).toBe(2)
    expect(pq.size).toBe(6)
    expect(pq.isEmpty).toBeFalsy()
  })

  test('should remove an element', () => {
    pq.poll()
    pq.poll()
    expect(pq.poll()).toBe(4)
    expect(pq.peek).toBe(5)
    expect(pq.size).toBe(3)
    expect(pq.isEmpty).toBeFalsy()
  })
})