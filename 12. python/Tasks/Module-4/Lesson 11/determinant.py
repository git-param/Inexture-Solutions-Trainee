# Take a 3x3 matrix as input from the user 
# and write the logic to calculate and display its determinant.

matrix = [[0]*3 for i in range(3)]

class MatrixDeterminant:
    def __init__(self, matrix):
        """Initialize the matrix."""
        self.matrix = matrix 

    def calculate_determinant(self):
        """Calculate the determinant of a 3x3 matrix."""
        a, b, c = self.matrix[0]
        d, e, f = self.matrix[1]
        g, h, k = self.matrix[2] 
        
        det = a*(e*k - f*h) - b*(d*k - f*g) + c*(d*h - e*g)
        return det


matrix = [[0]*3 for _ in range(3)]

print("Enter values for matrix:")

for i in range(3):
    for j in range(3):
        while True:
            try:
                matrix[i][j] = int(input(f"matrix[{i}][{j}]: "))
                break
            except ValueError:
                print("\n\t\tEnter only integer values")

matDet = MatrixDeterminant(matrix)

print("Determinant:", matDet.calculate_determinant())