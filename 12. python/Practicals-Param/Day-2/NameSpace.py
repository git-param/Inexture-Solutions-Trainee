# Think of namespaces as a note which keeps list of all the
# names that are availabe in a scope.
import pprint

# Namespaces bascially tells interpreter about what is
# accessible and what is not.

# All the names that are available to use in a score will be part
# of the namespace for that scope.

# Namespaces are the reason you can have same function name in
# python in two different class or module, you can run them
# together and they will never get conflicted
# (Because they have seperate namespaces.)

a=10

# print("Before function call: ",a)
# pprint.pp(locals())
# pprint.pp(globals())


def function1():
    # a=15
    # b=20
    print(a)
    # a=100
    pprint.pprint(locals())
    # pprint.pprint(globals())

# print(a)
function1()
# print("After function call: ",a)