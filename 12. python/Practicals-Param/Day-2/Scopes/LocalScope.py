a=10

def function1():
    # print("a before overwriting: ",a)
    a=15
    print("a after overwriting: ",a)

function1()
print("Outside function: ",a)

