print "Content-Type: text/plain"
print ""

# Define three input numbers
num1 = 45
num2 = 89
num3 = 23

print "Largest Number Finder"
print "---------------------"
print "Number 1: " + str(num1)
print "Number 2: " + str(num2)
print "Number 3: " + str(num3)
print "---------------------"

# Logic to find the largest number
if (num1 >= num2) and (num1 >= num3):
    largest = num1
elif (num2 >= num1) and (num2 >= num3):
    largest = num2
else:
    largest = num3

print "The largest number is: " + str(largest)