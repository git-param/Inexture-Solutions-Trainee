# Write the logic to check whether a number is a 
# Palindrome (Approach: Function-based implementation.)


def find_digits(num):
    """
    Calculate the number of digits in a given integer.

    Args:
        num (int): The integer whose digit count is to be determined.

    Returns:
        int: Total number of digits in the given number.
    """
    digit = 1
    x = 10

    # Increase divisor until it exceeds the number
    while (num % x) != num:
        x *= 10
        digit += 1

    return digit


def is_palindrome(number):
    """
    Determine whether a given integer is a palindrome.

    The function compares digits from the leftmost and
    rightmost sides of the number using positional
    divisors (left and right). The comparison continues
    until the pointers meet in the middle.

    Args:
        number (int): The integer to check.

    Returns:
        bool: True if the number is a palindrome,
              otherwise False.
    """
    digits = find_digits(number)

    left = 10 ** (digits - 1)
    right = 1

    # Compare digits from both ends of the number
    while left > right:

        # Extract digits from both ends
        left_digit = (number // left) % 10
        right_digit = (number // right) % 10

        if left_digit != right_digit:
            return False

        left //= 10
        right *= 10

    return True

num=int(input("Enter your number: "))

if is_palindrome(num):
    print("Yes! The number is palindrome.")
else:
    print("Not Palindrome")