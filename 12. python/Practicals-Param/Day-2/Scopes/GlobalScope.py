a=10

def function1():
    global a
    a=20
    print("a inside function call: ",a)

print("a before function call: ",a)
function1()
print("a after function call: ",a)



# case 2:
a=100
print(a)
def function1():
    # global a
    a=200
    print(a)
    def function2():
        nonlocal a
        a=300
        print(a)
    function2()
    print(a)
function1()
print(a)