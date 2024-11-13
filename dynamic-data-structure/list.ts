class ListNode {
  node: number;
  next: ListNode | null;

  constructor(node: number) {
    this.node = node;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  prepend(node: number): void {
    const newNode = new ListNode(node);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(node: number): void {
    const newNode = new ListNode(node);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.node);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.printList();
