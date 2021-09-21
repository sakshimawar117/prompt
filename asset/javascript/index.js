
/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a
triangle (area = 0.5 x b x h).
o Enter base: 20
o Enter height: 10
o The area of the triangle is 50*/

let base=prompt("entert base")
let height=prompt("enter height")
console.log(`area of triangle is ${0.5*base*height}`)

/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the
parameter of triangle (parameter = a + b + c)
o Enter side a: 5
o Enter side b: 4
o Enter side c: 3
o The parameter of the triangle is 12
  var e=prompt("enter side a to find the parameter of triangle")
var  f=prompt("enter side b to find the parameter of triangle")
 var g=prompt("enter side c to find the parameter of triangle")
console.log(e+f+g)*/

/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the
parameter of rectangle (parameter = 2 x (length + width))

let length=prompt("enter lenght")
let width=prompt("enter width")
console.log(length*width)

console.log(2*(length+width))*/


/*
Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a
circle(c = 2 x pi x r) where pi = 3.14.*/
let pi =3.14
let r =prompt("enter radius of circle")
console.log(`area =${pi*r*r}`)
console.log(`circumference of a circle is ${2*pi*r}`)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2

let x= prompt("enter the value of x")
console.log(`y=${2*x-2}`)
    
    
    //Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
    
    let x1=2
    let x2=6
    let y1=2
    let y2=10

    console.log(y1-y2/x2-x1)

    /*Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
o Enter hours: 40
o Enter rate per hour: 28
o Your weekly earning is 1120*/

let hours=prompt("enter hours")
let perhour=prompt("enter rate per hour")
console.log(`your weekly earning is ${hours*perhour}`)

//If the length of your name is greater than 7 say, your name is long else say your name is short.

let name=prompt("enter your name")
if (name>7){
    console.log("your name is long")
}
else{
    console.log("your name is short")
}

/*Compare your first name length and your family name length and you should get this output.
o let firstName = 'Murtaza'
o let lastName = 'Lightwala'
o Your family name, Lightwala is longer than your first name, Murtaza*/

let firstname=prompt("enter your first name ")
let lastname=prompt("enter your last name")
if(lastname>firstname){
    console.log(`your familyname ${lastname} is longer than your first name ${firstname}`)
}
else{
    console.log(`your first name ${firstname} is longer than your familyname ${lastname} `)

}
/*Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
o let myAge = 250
o let yourAge = 25
o I am 225 years older than you.*/
let myage=18
let yourage=prompt("enter your age")
if (yourage>myage){
    console.log(`you are ${yourage-myage} older than me`)
}
else{
    console.log(` i am ${myage-yourage} older than you`)
}

/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if
not tell the user to wait a certain amount of years.*/

let birthyear= prompt("Enter your birth year")


if (birthyear<=2003){
    console.log(`your are ${2021-birthyear} year old enough to drive`)
}
else{
    console.log(`you are ${2021-birthyear} you will allow to drive after ${18-(2021-birthyear)} years.`)
}
//Write a program which tells the number of days in a month, now consider leap year.

