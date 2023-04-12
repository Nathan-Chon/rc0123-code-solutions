export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    const array = [];
    while (stack.peek() !== undefined) {
      array.push(stack.pop());
    } return Math.max(...array);
  }
}
