export default function takeTop(stack) {
  if (stack.length === 0) {
    return undefined;
  }

  return stack.pop();
}
