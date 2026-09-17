class Stack {
    private items: number[] = [];

    push(value: number): void {
        this.items.push(value);
    }

    pop(): number | undefined {
        return this.items.pop();
    }

    peek(): number | undefined {
        return this.items[this.items.length - 1];
    }

    display(): void {
        console.log("Stack:", this.items);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();

console.log("Top element:", stack.peek());
console.log("Removed element:", stack.pop());

stack.display();