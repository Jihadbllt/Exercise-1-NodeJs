const student = {
    name: "Marie",
    age: 20
}

const courses = []

student.age = 21

student.grade = "A"


courses.push("Math", "Physics", "Chemistry")


const foundCourses = courses.indexOf("Physics")


const newCourses = courses.slice(0, 2)

console.log (student)
console.log(foundCourses)
console.log(newCourses)