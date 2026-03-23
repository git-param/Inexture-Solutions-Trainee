# Write the logic to implement the Selection Sort algorithm using functions.

def find_lowest(arr, current_index):
    """This function finds the lowest element in the given array

        Args: 
            arr (list) : Gives the list to be sorted
            current_index (integer) : Points to the index from where to end of array, 
                                    one must find the 
                                    min. element (gives sub array)

        Return:
            Index of minimum elemnet from the given sub array
    """
    min_ele_index = current_index

    # logic to find the index of lowest element
    for i in range(current_index+1, len(arr)):
        if arr[min_ele_index] > arr[i]:
            min_ele_index = i

    return min_ele_index


def selection_sort(arr):
    """Sort a list in ascending order using the selection sort algorithm.

        The algorithm repeatedly finds the smallest element in the
        unsorted portion of the list and swaps it with the element
        at the current position. The sorting is performed in-place.

        Args:
            arr (list): List of comparable elements.

        Returns:
            list: The sorted list in ascending order.
    """
    for i in range(len(arr)-1):
        min_index = find_lowest(arr,i)
        arr[i], arr[min_index] = arr[min_index], arr[i] #swap lowest element with current element

    return arr


mylist=[8,7,6,5,4,3,2,1,0]
print(selection_sort(mylist))
