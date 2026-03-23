"""
Write the logic to print the following incremental number pattern using loops.
1
2 3
4 5 6
7 8 9 10
"""

def print_pattern(n):
    """prints number upto n in a pattern"""
    count=1

    for i in range(1,(n+1)//2):
        for _ in range(i):
            print(count, end=" ")
            count+=1
        print()


n=int(input("Enter your number: "))
print_pattern(n)