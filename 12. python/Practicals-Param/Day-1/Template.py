from string import Template
fname="param"
age=22
msg="Hey $name your age is $age"
tempObj=Template(msg)
print(tempObj.substitute(name="param",age=22))