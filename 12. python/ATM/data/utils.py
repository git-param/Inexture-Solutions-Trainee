import random

def get_int_input(prompt=""):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Enter only integer value!")

def generate_random_number(n):
    if n <= 0:
        return "Invalid input, n must be a positive integer"
    range_start = 10**(n-1)
    range_end = (10**n) - 1
    return random.randint(range_start, range_end)