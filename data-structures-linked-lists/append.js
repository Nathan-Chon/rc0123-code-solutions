/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const node = new LinkedList(value);
  if (list.data == null) {
    list.data = node;
    return;
  }
  while (list.next) {
    list = list.next;
  }
  list.next = node;
  return list;
}
