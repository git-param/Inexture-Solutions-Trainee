def args_func(*args):
    print(*args)
    mydict=args[2]
    mydict['age']=22
    print(*args)

args_func(1,2,{'age': 3})

