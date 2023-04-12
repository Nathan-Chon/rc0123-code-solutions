export default function isEmpty(stack) {
  const item = stack.peek();
  if (item === undefined) {
    return true;
  } else {
    return false;
  }
}
