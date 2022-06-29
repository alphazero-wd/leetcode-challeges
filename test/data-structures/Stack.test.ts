import { Stack } from '../../src/data-structures/Stack'

describe('Stack test', () => {
  let stack: Stack<number>
  test('init a stack', () => {
    stack = new Stack<number>()
    expect(stack).toBeInstanceOf(Stack)
    expect(stack.isEmpty).toBeTruthy()
  })

  test('should add an element', () => {
    stack.push(5)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(6)
    stack.push(7)
    expect(stack.peek).toBe(7)
    expect(stack.size).toBe(6)
    expect(stack.isEmpty).toBeFalsy()
  })

  test('should remove an element', () => {
    stack.pop()
    stack.pop()
    expect(stack.pop()).toBe(4)
    expect(stack.peek).toBe(3)
    expect(stack.size).toBe(3)
    expect(stack.isEmpty).toBeFalsy()
  })
})