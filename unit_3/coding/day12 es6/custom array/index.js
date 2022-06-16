// Stack :-
// Length, push, pop, peek

//stack = [] 
//length = 0;
//stack[length] = el;

class Stack {
  constructor() {
    this.length = 0;
    this.stack = [];
  }

  push(el) {
    this.stack[this.length] = el;
    this.length++;
  }

  pop() {
    this.stack.pop();
    this.length--;
  }

  peek() {
    return this.stack[this.length - 1];
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(10);

console.log(s1.peek());
s1.pop();
console.log(s1);