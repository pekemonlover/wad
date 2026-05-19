print "Content-Type: text/plain"
print ""

num = 10 

print "Table of 10: "
print "--------------"

for i in range(1,11):
    result = num * i
    print str(num) + " x " + str(i) + " = " + str(result)