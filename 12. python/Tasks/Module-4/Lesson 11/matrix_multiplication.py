# Take two 3x3 matrices.
# Take user input to fill both matrices.
# Multiply the matrices and store the result in another 3x3 matrix.
# Display the final result.
matrix1 = [[0]*3 for i in range(3)]
matrix2 = [[0]*3 for i in range(3)]

class MAtMul:
    def __init__(self, matrix1, matrix2):
        """class  constructor to initialize the variables"""
        self.matrix1 = matrix1
        self.matrix2 = matrix2

    def multiply_matrix(self):
        """function to multiply the matrix"""
        self.matrix3 = [[0]*3 for i in range(3)]

        for i in range(3):
            for j in range(3):
                for k in range(3):
                    self.matrix3[i][j] += (self.matrix1[i][k] * self.matrix2[k][j])

    def display_values(self):
        """function to display the values of the matrix"""
        self.multiply_matrix()
        print("\n\nResultant Matrix:")
        for row in self.matrix3:
            print("\t\t",*row)


# ------------------------------------------ #

print("Enter values for matrix 1!")
for i in range(3):
    for j in range(3):
        while True:
            try:
                matrix1[i][j] = int(input(f"matrix1 [{i}] [{j}]: "))
                break
            except ValueError:
                print("\n\t\tEnter only integer values")

print("Enter values for matrix 2!")
for i in range(3):
    for j in range(3):
        while True:
            try:
                matrix2[i][j] = int(input(f"matrix2 [{i}] [{j}]: "))
                break
            except ValueError:
                print("\n\n\t\tEnter only integer values")


m=MAtMul(matrix1,matrix2)
m.display_values()