"""
Write the logic to print the following spiral number pattern using loops.
1 2 3 4
12 13 14 5
11 16 15 6
10 9 8 7
"""
import math

def print_pattern(n):
    """prints number upto n in a pattern"""

    #create a matrix of n*n with 0 as default value
    matrix = [[0]*n for _ in range(n)]
    num = 1

    top, bottom = 0, n-1
    left, right = 0, n-1

    while num <= n*n:

        # fill top row
        for i in range(left, right+1):
            matrix[top][i] = num
            num += 1
        top += 1

        # fill right column
        for i in range(top, bottom+1):
            matrix[i][right] = num
            num += 1
        right -= 1

        # fill bottom row
        for i in range(right, left-1, -1):
            matrix[bottom][i] = num
            num += 1
        bottom -= 1

        # fill left column
        for i in range(bottom, top-1, -1):
            matrix[i][left] = num
            num += 1
        left += 1
        
    for row in matrix:
        print(*row)

n=int(input("Enter your number: "))
print_pattern(int(math.sqrt(n)))