class User {
    constructor (firstName, lastName, age, email, admin) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.admin = admin
    }

    getUserInfo() {
        return `Full name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}
const user = new User("Jihad", "Ballout", 22, "jihad.ballout@epita.fr", false);

console.log(user.getUserInfo());

user.setAge(23);

console.log(user.getUserInfo());

