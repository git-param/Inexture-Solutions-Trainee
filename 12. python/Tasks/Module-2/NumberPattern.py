"""
Write the logic to print the following number pattern using loops.
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
"""

def print_pattern(n):
    """prints number upto n in a pattern"""

    for col in range(n,0,-1):
        for row in range(1,col+1):
            print(row, end=" ")
        print()

n=int(input("Enter your number: "))
print_pattern(n)