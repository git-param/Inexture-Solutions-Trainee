def strong(func):
    print("Strong function called")
    def wrapper(*args):
        print("Strong wrapper called")
        return '<strong>' + func(*args) + '</strong>'
    return wrapper

def emphasis(func):
    print("Emphasis function called")
    def wrapper(*args):
        print("Emphasis wrapper called")
        mydict=args[1]
        mydict['month']=mydict['month'].upper()
        return '<em>' + func(*args) + '</em>'
    return wrapper

def greet(name, value):
    return f"Hello {name}! Current month is - {value['month']}"

emp = emphasis(greet)
greet1 = strong(emp)

print(greet1('param', {'month': 'january', 'salary': 40}))