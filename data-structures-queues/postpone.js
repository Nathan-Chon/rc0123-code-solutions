export default function postpone(queue) {
  const item = queue.peek();
  if (item === undefined) {
    return queue;
  }
  return queue.enqueue(queue.dequeue());
}
