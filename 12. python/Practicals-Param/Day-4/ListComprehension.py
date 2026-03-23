# Case-1
test_marks=[100, 90, 75, 65, 79, 55, 88, 97, 46, 35, 30, 98]

# Case-2
failed_student_marks=[i for i in test_marks if i < 50]
print("Failed students' marks: ",failed_student_marks)

distinction_marks=[i if i not in failed_student_marks else None for i in test_marks]
print("Distinction marks: ",distinction_marks)

# Case-3
even_squares = tuple(x * x for x in range(5) if x % 2 == 0)
print(even_squares)

# Case-4
def gen():
    for i in range(5):
            yield i
a=gen()
print(a)
print(list(a))

# Case-5: Return list of even numbers from the list
nums = [1,2,3,4,5,6,7,8]
print([sqr*sqr for sqr in nums if sqr % 2 == 0])

# Cass-6: Flatten the following 2D list into a single list.
matrix = [ [1, 2, 3], [4, 5], [6, 7, 8] ]
single_list = [ i for j in matrix for i in j ]
print("Single list: ", single_list)

i = [1,2,3]
for j in i:
    print(j)

for i in matrix:
    print(i)

# Case-7:
a = ( i * i for i in range(5) )
# print(a)

str1="My name is Param Dholakia"
mylist=str1.split(" ")
mylist=mylist[::-1]
for i,j in enumerate(mylist):
    if i%2!=0:
        mylist[i]=mylist[i][::-1]

str2=""
for i in mylist:
    str2=str2+i+" "
str2=str2[:len(str2)-1]
print(str2)