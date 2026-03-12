a=100
print(a)
def function1():
    global a
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