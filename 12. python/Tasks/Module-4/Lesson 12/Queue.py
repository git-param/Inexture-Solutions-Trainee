"""
Implement a Queue using a class-based approach.

Operations to implement:
enqueue – Insert an element into the queue.
dequeue – Remove an element from the front of the queue.
peek – Display the front element of the queue without removing it.
display – Show all elements currently present in the queue.
is_empty – Check whether the queue is empty.
The program should repeatedly ask the user to choose an operation until the user chooses to exit."""

class Queue:

    def __init__(self, queue_capacity):
        self.queue = []
        self.front = -1
        self.rear = -1
        self.queue_capacity = queue_capacity

    def enqueue(self, element):
        """
        Insert an element at the rear of the queue.

        Args:
            element (list): Element to be added to the queue. 
                            (Currently expected as a list due to implementation.)

        Behavior:
            - If the queue is empty, initializes the front index to 0.
            - Increments the rear index and appears the element to the queue.

        Return:
            - bool(True) : if value inserted
            - bool(False) : if queue is already full
        """

        if len(self.queue) == self.queue_capacity:
            return False
        else:
            if self.front == -1:
                self.front = 0
            self.rear += 1
            self.queue += element
            return True

    def dequeue(self):
        """
        Remove and display the front element from the queue.

        Behavior:
            - If the queue is empty, prints an error message.
            - Otherwise:
                - Removes the front element.
                - Adjusts front and rear indices accordingly.
                - Resets indices if the queue becomes empty.
        """
        if self.front == -1:
            return False
        else:
            deleted_item = self.queue[self.front]
            del self.queue[self.front]
            if self.front == self.rear:
                self.front, self.rear = -1,-1
            else:
                self.rear -= 1
            return deleted_item
            
    def peek(self):
        """
        Display the front element without removing it.

        Behavior:
            - If the queue is empty, prints a message.
            - Otherwise, prints the element at the front index.
        """
        if self.front == -1:
            return False
        else:
            return self.queue[self.front]

    def is_empty(self):
        """
        Check whether the queue is empty.

        Returns:
            bool(True): if the queue is empty, False otherwise.
        """
        return self.front == -1

    def display(self):
        """
        Display all elements currently present in the queue.

        Behavior:
            - If the queue is empty, prints a message.
            - Otherwise, prints the entire queue list.
        """
        if self.is_empty():
            print("Queue is empty!")
        else:
            print(self.queue)

if __name__ == '__main__':
    flag = True

    while True:
        try:
            queue_capacity = int(input("Enter the queue capacity: "))
            break
        except ValueError:
            print("Enter integer value only👇🏻")

    queue = Queue(queue_capacity)
    while flag:
        print("\n\n----------------------------------------")
        print("Please select your operation: ")
        print("1. Enqueue")
        print("2. Dequeue")
        print("3. Peek")
        print("4. Display whole queue")
        print("5. Check whether queue is empty")
        print("6. Quit")

        try:
            choice = int(input("Enter your choice: "))
        except ValueError:
            print("Invalid choice. Please enter a number (1-6).")
            continue

        if choice == 1:
            print("\n\nOperation - Enqueue into the queue")
            try:
                element = int(input("Enter your element to push: "))
                if queue.enqueue([element]):
                    print("Value inserted successfully")
                else:
                    print("Failed to insert value - queue is full")
            except ValueError:
                print("Invalid input. Please enter an integer only.")

        elif choice == 2:
            print("\n\nOperation - Dequeue from the queue")
            res = queue.dequeue()
            if res is False:
                print("Failed to delete - The queue is already empty")
            else:
                print(f"Deleted item: {res}")
                del res


        elif choice == 3:
            print("\n\nOperation - Peek from the queue")
            element = queue.peek()
            if element is False:
                print("Empty Queue")
            else:
                print(f"Peek Element: {element}")

        elif choice == 4:
            print("\n\nOperation - Display all elements of the queue")
            queue.display()

        elif choice == 5:
            print("\n\nOperation - Check whether queue is empty or not")
            if queue.is_empty():
                print("\t\tQueue is empty")
            else:
                print("\t\tQueue is not empty")

        elif choice == 6:
            print("Exiting the program!")
            flag = False

        else:
            print("Enter a proper choice (1-6).")
