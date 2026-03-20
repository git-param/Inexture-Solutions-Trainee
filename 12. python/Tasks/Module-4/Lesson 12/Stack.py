"""Implement a Stack using a class-based approach.
Operations to implement:
push – Insert an element into the stack.
pop – Remove the top element from the stack.
peek – Display the top element of the stack without removing it.
display – Show all elements currently present in the stack.
is_empty – Check whether the stack is empty.
The program should repeatedly ask the user to choose an
operation until the user chooses to exit."""

class Stack:
    def __init__(self, capacity):
        self.stack_list = []
        self.top = -1
        self.capacity = capacity

    def push(self, element):
        """
        Insert an element onto the top of the stack.

        Args:
            element (list): Element to be pushed onto the stack.
                            (Currently expected as a list due to use of +=)

        Behavior:
            - If the stack is empty, initializes top to 0.
            - Otherwise, increments the top index.
            - Adds the element to the underlying list.
        """
        if len(self.stack_list) == self.capacity:
            print("Overflow! Operation not performed")
        else:
            if self.top == -1:
                self.top = 0
                self.stack_list += element

            else:
                self.top += 1
                self.stack_list += element
            
    def pop(self):
        """
        Remove and return the top element from the stack.

        Returns:
            int: The popped element if the stack is not empty.
            bool: False if the stack is empty.

        Behavior:
            - If the stack is empty, returns -1.
            - Otherwise:
                - Retrieves the top element.
                - Removes it from the list.
                - Decrements the top index.
        """
        if self.top == -1:
            return False
        else:
            last_element = self.stack_list[self.top]
            del self.stack_list[self.top]
            self.top -= 1
            return last_element

    def peek(self):
        """
        Retrieve the top element without removing it.

        Returns:
            int: The top element if the stack is not empty.
            bool: False if the stack is empty.
        """
        if self.top == -1:
            return False
        else:
            return self.stack_list[self.top]

    def display_stack(self):
        """
        Display all elements in the stack from bottom to top.

        Behavior:
            - If the stack is empty, prints a message.
            - Otherwise, prints all elements in order.
        """
        if self.top == -1:
            print("The stack is empty!")
        else:
            print("Stack (bottom -> top):")
            for i in self.stack_list:
                print(f"{i}", end=" ")

    def is_empty(self):
        """Check whether the stack is empty."""
        return self.top == -1

if __name__ == '__main__':
    while True:
        try:
            capacity = int(input("Enter length of stack: "))
            if capacity < 1:
                print("Enter length > 1")
                continue
            break
        except ValueError:
            print("Enter numeric value")

    stack = Stack(capacity)


    while True:
        print("\n\n----------------------------------------")
        print("Please select your operation: ")
        print("1. Push")
        print("2. Pop")
        print("3. Peek")
        print("4. Display whole stack")
        print("5. Check whether stack is empty")
        print("6. Quit")

        try:
            choice = int(input("Enter your choice: "))
        except ValueError:
            print("Invalid choice. Please enter a number (1-6).")
            continue

        if choice == 1:
            print("\n\nOperation - Pushing into the stack")
            try:
                element = int(input("Enter your element to push: "))
                stack.push([element])
            except ValueError:
                print("Invalid input. Please enter an integer only.")

        elif choice == 2:
            print("\n\nOperation - Pop from the stack")
            element = stack.pop()
            if element is False:
                print("\t\tThe stack is empty! Can't pop")
            else:
                print(f"\n\t\tPopped element: {element}")

        elif choice == 3:
            print("\n\nOperation - Peek from the stack")
            element = stack.peek()
            if element is False:
                print("\t\tThe stack is empty! No item to peek")
            else:
                print(f"\t\tPeek element: {element}")

        elif choice == 4:
            print("\n\nOperation - Display all elements of the stack")
            stack.display_stack()

        elif choice == 5:
            print("\n\nOperation - Check whether stack is empty or not")
            if stack.is_empty():
                print("\t\tStack is empty")
            else:
                print("\t\tStack is not empty")

        elif choice == 6:
            print("Exiting the program!")
            break

        else:
            print("Enter a proper choice (1-6).")