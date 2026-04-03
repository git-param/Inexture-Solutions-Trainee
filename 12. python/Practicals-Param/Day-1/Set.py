set1={4,3,2,1}
print(set1)

# a,b,c,d=set1
# print(a,b,c,d)
# print("\n\n")
# print(id(a),id(b),id(c),id(d))

for index,item in enumerate(set1):
    print("Item: {0}, Index: {1}, Location: {2}".format(item,index,id(item)))

# print("\n\n")
# for i in set1:
#     print("Item: {0}, Location: {1}".format(i,id(i)))

print("\n\n")
set2={'a','b','c','d','e'}
print(set2)

set3={"apple", "banana", "cherry"}
print(set3)