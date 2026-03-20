// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Pratyush",
            lastname: "Patwal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

//destructuring of obj

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]