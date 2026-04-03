# Write the logic to calculate the LCM (Least Common Multiple) and GCD (Greatest Common Divisor) of numbers.
# (Approach: Function-based implementation.)

# Logic i tried to find LCM manually
# def find_lcm(a,b):
#     x=2
#     lcm=1
#     while (a != 1) or (b != 1):
#         if a % x == 0 and b % x == 0:
#             lcm *= x
#             a //= x
#             b //= x
        
#         elif a % x == 0:
#             lcm *= x
#             a //= x
        
#         elif b % x == 0:
#             lcm *= x
#             b //= x
        
#         else: 
#             x += 1
#     return lcm


def find_gcd(a,b):
    """
    Find gcd of 2 numbers

    Args:
        a (int): 1st number
        b (int): 2nd number
    
    Return (int): 
        GCD of a & b
    """
    x=2
    gcd=1
    
    limit1=a/2
    limit2=b/2

    while (x < limit1) or (x < limit2):
        if a % x == 0 and b % x == 0:
            gcd *= x
            a //= x
            b //= x
        
        else: 
            x += 1
    
    return gcd

a = int(input("Enter number1: "))
b = int(input("Enter number2: "))

gcd=find_gcd(a,b)
print(f"LCM: {abs(a*b)//gcd}, GCD: {gcd}")