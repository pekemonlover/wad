print "Content-Type: text/plain"
print ""

# Define two numbers
num1 = 20
num2 = 10

# Perform calculations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2

# Handle division carefully (avoiding division by zero)
if num2 != 0:
    division = num1 / num2
else:
    division = "Error (Division by zero)"

# Print the results
print "Calculator Application"
print "----------------------"
print "Number 1: " + str(num1)
print "Number 2: " + str(num2)
print "----------------------"
print "Addition: " + str(addition)
print "Subtraction: " + str(subtraction)
print "Multiplication: " + str(multiplication)
print "Division: " + str(division)