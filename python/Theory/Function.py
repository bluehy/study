#Built-in Function 예시
# print()
# type()
# len() 
# int()

age = "18"
print(age)          #18
print(type(age))    #string
n_age = int(age)
print(n_age)        #18
print(type(n_age))  #int

# ---

def say_hello():
  print("hello")
  print("bye")
print("bye")
# 들여쓰기로 구분되기 때문에, 주의할 것.
say_hello()
say_hello()
say_hello()
say_hello()
# function 실행. ()까지 적어줘야 실행.

# ---


def say_hello_who(name="anonymous"):
  print("hello", name)

say_hello_who()
say_hello_who("Anne")

def plus(a, b):
  print(a + b)

def minus(a, b=0):
  print(a - b)

plus(2,5)
minus(2)
minus(2,5)

# ---

