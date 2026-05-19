print "Content-Type: text/plain"
print ""

print "First 10 Elements of Fibonacci Series:"
print "--------------------------------------"

# Initialize the first two elements
a = 0
b = 1

# Loop to calculate and print the first 10 elements
for i in range(10):
    print str(a)
    # Update values: a becomes b, and b becomes the sum of a + b
    nth = a + b
    a = b
    b = nth