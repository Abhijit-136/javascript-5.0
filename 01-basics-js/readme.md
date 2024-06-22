## What is javascript and why we use it?

- javascript is logic based  programming language where we can create our code project functionality in that.
- javascript is a high level programming language for build web pages.
- Now we used the ES6 version of javascript,in other words we called vanila javascript.
- runtime environment of javascript is node js.

## VARIABLE :

- Variable is a container to store some data.
- In javascript we have 3 types of variables...
1. let 
2. var
3. const

# 1.let :
- let is a type of variable which is used for changing the variable name later.
- Now these days ,  most of the cases we use let for creating variable.
- let is a block scope code so we have been using let for most of the cases.
 
 # 2.var :
 - var is a type of variable which is also used for changing the variable later stage.
 - var is used in oldest browser so now a days we don't use var most of the time.

 # 3.const :
 - const is a type of variable where we can't change our data further.
 - const means constant to store some data like numbers, integers etc ...
 

 # taks :
 1. Difference between let and var.
 2. Difference between var and const.
 3. What do you mean by hoisting(when we don't declare value of variables but it execute the code).

 ## Rules of Variable :

  - variables names are case sesitive "a" "A" are different.
  - only letter, digit , underscore and $ is allowed.
  - only letter, underscore and $ should be first character.
  - reserver words can't be variable names.

## data types in javascript :

- Datatype is an attribute associated with a piece of data that tells a computer system how to interprete its value.
- in datatype we used typeOf operator to know what type of data it is.
- Mainly in javascript there are two types of data types ..
# 1. primitive :
- In javascript there are 7 types of primitive data types.
# a. Number : number are the type of data type those it contain some numerical value.
# b. String : String is a type of data type that can hold a set of character like name..
# c. Boolean : In boolean data type we get boolean value like true or false.
# d. undefined : In undefined data type the data is not define so that it will show undefined.
# e. null : in this data type we get null for the means nothing.
# f. Bigint : In bigint we will get bigger integer .
# g. Symbol : In symbol data type we get whole symbol as well as the value we get for the data type.

# 2. Non-primitve or  reference :

- non-primitive data types are the type of data that can hold multiple items in a single time.
- non-primitive data types are :-object , array , function.
# 1.object : object is a non-primitive data types which can hold items in one single entity.
- mainly objects are working on (key:value) pair.
- the left hand side is our keys and right hand side are the values of the following object.

ex -
prathama ={
    college : "giet",
    address : "BBSR",
    age : 48,
    salary : 45000,
    carrier : "Good", 
}
console.log(prathama)
console.log(prathama["address"])
console.log(prathama["salary"])

## Operator in js :
 - operator are key features to do some task or operate some task.
 - ex :A + B
 - in the above ex A & B are the operands and the + is the opertaor..
 # 1.Arithematic operator :-
 (+,-,*,/,%)
 exponentiation -> **

 # 2.Unary operator :-
 increment -> ++
 decrement -> --

# 3.assignment operator :-(assign some values to the variables)
(=,+=,-=,=,/=,*=)

# 4.Comparison operator :
 It gives the result either in true or false..
equal to -> ==
not equal to -> !=
equal to and type -> ===
not equal to and type -> !==
(>,<,<=,>=)

# 5.Logical operator :
Checks the logic of the operator(true/false)
Logical AND -> &&
 Table of AND operator is:
 T+T =T
 T+F =F
 F+T =F
 F+F =F
Logical OR -> ||
 Table of OR oprator :
 T+T = T
 T+F = T
 F+T = T
 F+F = F
Logical NOT ->
 Table of NOT operator :
 T = F
 F = T !

 Conition Statement:-

 -To implement some condition in the code
 - there are 3 types of conditional statement are there
 1.if condition-
 -ifr condition is true then statement is true otherwise false.
 syntax:-
 if(condition){
    statement
 }
 2.if-else condition
 -if condition is true then block executed otherwise its terminate to else condition.
 syntax:-{
    statement
 }
 else{
    statement
 }
 3.else-if condition
 - its check the condition multiple times where condition is true.
 syntax:-
 if (condition){
    statement
 } else if (condition){
    statement
 } else-if(condition){
    statement
 } else-if(condition){
    statement
 }