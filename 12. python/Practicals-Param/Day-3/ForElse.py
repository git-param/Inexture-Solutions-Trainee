# Case 1
# for num in range(10):
#     if num > 5:
#         break
#     print(num, end=' ')
# else:
#     print("The loop was executed completely")


# Case 2
is_prime = 37
for num in range(2, is_prime//2):
    if is_prime%num == 0:
        print(f"{is_prime} has a factor {num} * {is_prime/num}")
        break
else:
    print(f"{is_prime} is a prime number")
