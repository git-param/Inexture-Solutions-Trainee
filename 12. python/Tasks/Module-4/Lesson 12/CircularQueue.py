"""
Task: Implement Circular Queue
Implement a Circular Queue using a class-based approach.

Operations to implement:

enqueue – Insert an element into the circular queue.
dequeue – Remove an element from the circular queue.
front – Display the front element of the queue.
rear – Display the last element of the queue.
display – Show all elements currently present in the circular queue.
is_empty – Check whether the circular queue is empty.
is_full – Check whether the circular queue is full.

The program should repeatedly ask the user to choose an
operation until the user chooses to exit."""


class CircularQueue:
    def __init__(self, queue_capacity):
        """
        Initialize a circular queue with a fixed capacity.

        Args:
            queue_capacity (int): Maximum number of elements the queue can hold.

        Attributes:
            circluar_queue (list): Underlying storage initialized with None.
            front (int): Index of the front element (-1 when empty).
            rear (int): Index of the last element (-1 when empty).
            queue_capacity (int): Maximum size of the queue.
        """
        self.circular_queue = [None for i in range(queue_capacity)]
        self.front = -1
        self.rear = -1
        self.queue_capacity = queue_capacity

    def enqueue(self, element):
        """
        Insert an element into the circular queue.

        Args:
            element (list): A single-element list containing the value to insert.
                            (Note: current implementation expects element[0])

        Returns:
            bool: True if insertion is successful, False if the queue is full.

        Behavior:
            - If queue is empty, initializes front and rear to 0.
            - Wraps rear to 0 if end of array is reached and space exists at front.
            - Otherwise increments rear normally.
        """
        if self.is_full():
            return False
        else:
            if self.front == -1: # if queue is empty
                self.front, self.rear = 0, 0
            elif (self.rear == self.queue_capacity - 1 ) and self.front > 0: # if there is space at staring but not at ending
                self.rear = 0
            else:
                self.rear += 1
            self.circular_queue[self.rear] = element[0]
            return True

    def dequeue(self):
        """
        Remove an element from the circular queue.

        Returns:
            bool: False if the queue is empty, True otherwise.

        Behavior:
            - Removes the element at the front index.
            - Resets front and rear to -1 if queue becomes empty.
            - Wraps front to 0 if end of array is reached.
            - Otherwise increments front normally.

        Note:
            This method does NOT return the removed element; it only indicates success.
        """
        if self.is_empty():
            return False
        else:
            self.circular_queue[self.front] = None
            if self.front == self.rear: # single element
                self.front, self.rear = -1, -1
            elif self.front == self.queue_capacity - 1: # if front is pointing at end of queue
                self.front = 0
            else:
                self.front += 1
            return True

    def get_front(self):
        """
        Retrieve the front element of the queue.

        Returns:
            int or bool: The front element if queue is not empty, otherwise False.
        """
        if self.front == -1:
            return False
        else:
            return self.circular_queue[self.front] # fetch the element at index = front

    def get_rear(self):
        """
        Retrieve the rear (last) element of the queue.

        Returns:
            int or bool: The rear element if queue is not empty,
                         otherwise False.
        """
        if self.rear == -1:
            return False
        else:
            return self.circular_queue[self.rear]

    def is_empty(self):
        """
        Check whether the queue is empty.

        Returns:
            bool: True if the queue is empty, False otherwise.
        """
        return self.front == -1

    def is_full(self):
        """
        Check whether the queue is full.

        Returns:
            bool: True if the queue is full, False otherwise.

        Logic:
            - Queue is full if:
              (front > 0 and rear == front - 1), or
              (front == 0 and rear == queue_capacity - 1)
        """
        return (self.front > 0 and self.rear == self.front - 1) or (
            self.front == 0 and self.rear == self.queue_capacity - 1)

    def display(self):
        """
        Display all elements currently present in the queue.

        Behavior:
            - Prints "Queue is empty!" if no elements exist.
            - If front <= rear, prints elements in linear order.
            - If wrapped, prints elements from start to rear,
              then from front to end of the array.

        Output:
            Elements are printed in a space-separated format.
        """
        if self.is_empty():
            print("Queue is empty!")
        else:
            # normal queue displayed
            if self.front <= self.rear:
                for i in range(self.front, self.rear+1):
                    print(self.circular_queue[i], end=" ")

            # first index = 0 to rear and then front to index = limit
            else:
                for i in range(0, self.rear + 1):
                    print(self.circular_queue[i], end=" ")
                for i in range(self.front, self.queue_capacity):
                    print(self.circular_queue[i], end=" ")

if __name__ == '__main__':
    while True:
        try:
            queue_capacity = int(input("Enter the queue capaity: "))
            break
        except ValueError:
            print("Enter integer value only👇🏻")

    circular_queue = CircularQueue(queue_capacity)
    while True:
        print("\n\n----------------------------------------")
        print("Please select your operation: ")
        print("1. Enqueue")
        print("2. Dequeue")
        print("3. Front")
        print("4. Rear")
        print("5. Display")
        print("6. Is Empty?")
        print("7. Is Full?")
        print("8. Quit")

        try:
            choice = int(input("Enter your choice: "))
        except ValueError:
            print("Invalid choice. Please enter a number (1-6).")
            continue

        if choice == 1:
            print("\n\nOperation - Enqueue into the queue")
            try:
                element = int(input("Enter your element to push: "))
                if circular_queue.enqueue([element]):
                    print("Value inserted successfully")
                else:
                    print("Failed to insert value - queue is full")
            except ValueError:
                print("Invalid input. Please enter an integer only.")

        elif choice == 2:
            print("\n\nOperation - Dequeue from the queue")
            res = circular_queue.dequeue()
            if res is False:
                print("Failed to delete - The queue is already empty")
            else:
                print(f"Deleted item: {res}")
                del res

        elif choice == 3:
            res = circular_queue.get_front()
            if res is not False:
                print(f"Front: {res}")
            else:
                print("Empty Queue")

        elif choice == 4:
            res = circular_queue.get_rear()
            if res is not False:
                print(f"Rear: {res}")
            else:
                print("Empty Queue")

        elif choice == 5:
            print("\n\nOperation - Display all elements of the queue")
            circular_queue.display()

        elif choice == 6:
            print("\n\nOperation - Check whether queue is empty or not")
            if circular_queue.is_empty():
                print("\t\tQueue is empty")
            else:
                print("\t\tQueue is not empty")

        elif choice == 7:
            print("\n\nOperation - Check whether queue is empty or not")
            if circular_queue.is_full():
                print("\t\tQueue is full")
            else:
                print("\t\tQueue is not full")

        elif choice == 8:
            print("Exiting the program!")
            break

        else:
            print("Enter a proper choice (1-6).")