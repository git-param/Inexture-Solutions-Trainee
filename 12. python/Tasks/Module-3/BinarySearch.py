"""
Binary Search: Before performing the search, sort the list using 
one of the sorting algorithms that you implemented above.Then use 
Binary Search to find the element entered by the user.
"""

# Bubble sort logic from the BubbleSort.py file
unsorted_arr=[8, 7, 6, 5, 4, 3, 2, 1]

def bubble_sort(arr):
    '''This function sorts the list in n^2 time complexity
    
    Arguments: 
        arr(list)

    Return list sorted in ascending order'''
    for i in range(0,len(arr)):
        min_idx = i
        for j in range(i+1,len(arr)):
            if arr[min_idx] > arr[j]:
                arr[min_idx], arr[j] = arr[j], arr[min_idx]

    return arr

sorted_arr = bubble_sort(unsorted_arr)

def binary_search(arr, element):
    """
    Search for an element in a sorted list using the binary search algorithm.

    The function repeatedly divides the search interval in half. If the
    target element is smaller than the middle element, the search continues
    in the left half; otherwise, it continues in the right half.

    Args:
        arr (list): A list of elements sorted in ascending order.
        element (int): The value to search for.

    Returns:
        int: The index of the element if found, otherwise -1.
    """
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == element:
            return mid

        elif arr[mid] > element:
            right = mid - 1

        else:
            left = mid + 1

    return -1

print(f"The array is: {sorted_arr}")
num = int(input("Enter the number you want to find: "))
index = binary_search(sorted_arr, num)

if index != -1:
    print(f"Element:- {num} found at index: {index}")
else:
    print("No such element exist!")