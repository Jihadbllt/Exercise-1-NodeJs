# Exercise-NodeJs
This repository contains two JavaScript exercises showcasing basic object manipulation, array methods, and class creation. Below is a breakdown of each file's functionality and purpose.

## Exercise 1

This file demonstrates working with an object and an array. Specifically, it shows how to create, modify, and access object properties, as well as perform operations on an array.

Creating an Object (student):
A student object is created with the properties:
name: Set to "Marie"
age: Set to 20

Defining an Empty Array (courses):
An empty array courses is created to store the student’s courses.

Modifying Object Properties:
The age property of student is updated to 21.
A new property grade is added to the student object, set to "A".

Working with the Array (courses):
The push method is used to add "Math", "Physics", and "Chemistry" to the courses array.

Using indexOf to Find an Element:
The indexOf method is used to find the index of "Physics" in the courses array.

Using slice to Extract Elements:
The slice method is used to create a new array (newCourses) containing the first two elements of courses.

Displaying Results:
The complete student object, the index of "Physics", and the newCourses array are logged to the console.

## Exercise 2

This file demonstrates the creation and testing of a User class in JavaScript, showcasing how to define properties and methods within a class.

Creating the User Class:
The User class is defined with the following properties:
firstName: Stores the user's first name.
lastName: Stores the user's last name.
age: Stores the user's age.
email: Stores the user's email address.
admin: A boolean indicating if the user is an admin.

Defining Methods:
getUserInfo(): A method that returns a formatted string with the user's full name and age.
setAge(newAge): A method that sets the age property to a new value.

Testing the User Class:
An instance of the User class is created with the following values:
firstName: "Jihad"
lastName: "Ballout"
age: 22
email: "jihad.ballout@epita.fr"
admin: false

Using getUserInfo() and setAge() Methods:
The getUserInfo() method is called to display the user's full name and age.
The setAge() method is called to update the user's age to 23, and getUserInfo() is called again to verify the change.