# with open ('temp.txt', 'r') as f:
#     a = f.read()

# b = a.split('\n')
# word_count, c_count = 0, 0
# for s in b:
#     word_count += len(s.split(' '))
#     c_count += len(s)

# print(len(b))
# print(word_count)
# print(c_count)

with open('t1.csv', 'r') as f1:
    a = f1.read()

with open('t2.csv', 'r') as f2:
    b = f2.read()

c = b.split('\n')
b = '\n'

for i in c[1:]:
    b += i + '\n'

with open('t3.csv', 'w') as f3:
    f3.write(a + b)
