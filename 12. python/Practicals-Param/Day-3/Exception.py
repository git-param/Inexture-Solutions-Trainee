class GetOutOfLoop( Exception ):
    pass

while True:
    try:
        for num in range(100):
            if num>10:
                raise GetOutOfLoop
            else:
                print(num, end=' ')
    except GetOutOfLoop:
        print("Goodbye")
        break