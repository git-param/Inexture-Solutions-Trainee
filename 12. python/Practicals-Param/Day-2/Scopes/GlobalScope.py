a=10

def function1():
    global a
    a=20
    print("a inside function call: ",a)

print("a before function call: ",a)
function1()
print("a after function call: ",a)

