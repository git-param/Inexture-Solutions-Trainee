# Write the logic to find the factors of a number. Optimize the implementation as much as possible.
# (Approach: Function-based implementation.)

def find_factors(number):
    fact = []

    for i in range(1, (number // 2) + 1):
        
        if number % i == 0:
            fact.append(i)

    fact.append(number)
    return fact

num=int(input("Enter the number you want to find factors of: "))
factors=find_factors(num)

if factors:
    print("Factors are: ",factors)



"""#for optimized version(used ai just for knowing the optimal solution and so I didn't implement it):
import math
for i in range(1, int(math.sqrt(number)) + 1):
        
    if number % i == 0:
        fact.append(i)

        if i !=1 number // i:  # avoid duplicate for perfect square
            fact.append(number // i)
"""
