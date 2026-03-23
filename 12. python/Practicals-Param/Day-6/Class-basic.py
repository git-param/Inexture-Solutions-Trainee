class A:
    name = "Param"
    mylist = ["car"]
    def __init__(self, age):
        self.age = age

    def display_values(self):
        print(self.name,self.age)

a1=A(12)
a1.mylist.append("bike")

a2=A(13)
a2.mylist.append("cycle")
a2.name="Vaibhav"



a1.display_values()
a2.display_values()
print(a1.mylist)
a2.mylist=[10, 20, 30]
print(a1.mylist)
print(a2.mylist)

