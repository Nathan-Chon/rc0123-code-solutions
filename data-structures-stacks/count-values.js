export default function countValues(stack) {
  const item = stack.peek();
  if (item === undefined) {
    return 0;
  }
  const array = [];
  while (stack.peek() !== undefined) {
    array.push(stack.pop());
  } return array.length;

}
