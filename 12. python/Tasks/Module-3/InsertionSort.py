# Write the logic to implement the Bubble Sort algorithm using functions.

def insertion_sort(arr):
    """
    Sort a list in-place using the insertion sort algorithm.

    Iterates through the list and inserts each element into its
    correct position within the sorted portion on the left by
    shifting larger elements to the right.

    Args:
        arr (list): Unordered list given to be sorted.

    Returns:
        list: The sorted list.
    """
    for current_index in range(1, len(arr)):
        key = arr[current_index]
        i=current_index-1

        while i >= 0 and key < arr[i]:
            arr[i+1] = arr[i]
            i-=1

        arr[i+1] = key
        # print(arr)


    return arr

mylist=[8,7,6,5,0,1,2,3,4]
print(insertion_sort(mylist))