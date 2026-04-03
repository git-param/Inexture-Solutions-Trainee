# case-1
# def Loop1():
#     for i in range(1,11):
#         yield(i)
#
# for i in Loop1():
#     if i==7:
#         break
#     else:
#         print(i)

# case-2
flag=0
for i in range(4,11):
    for j in range(1,11):
        if i==j:
            flag=1
            break
        print(i,j)
    if flag:
        print("Final Break")
        break