"""
Write the logic to print the following star pattern using loops.
*
* *
* * *
* * * *
* * * * *
"""

def print_pattern(n):
    """prints number upto n in a pattern"""

    for row in range(n+1):
        for col in range(row):
            print('*', end=" ")
        print()

n=int(input("Enter your number: "))
print_pattern(n)