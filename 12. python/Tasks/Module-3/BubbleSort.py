# Write the logic to implement the Insertion Sort algorithm using functions.

unsorted_list=[8, 7, 6, 5, 4, 3, 2, 1]

def BubbleSort(arr):
    '''This function sorts the list in n^2 time complexity
    
    Arguments: 
        arr(list)

    Return list sorted in ascending order'''
    for i in range(0,len(arr)):
        min_idx=i
        for j in range(i+1,len(arr)):
            if arr[min_idx] > arr[j]:
                arr[min_idx], arr[j] = arr[j], arr[min_idx]

    return arr

print(BubbleSort(unsorted_list))