// Error Handling

// Arrow functions

// Destructing operator

// Spreading operator

// Template Literal

function printUser(user) {
    const { name, email } = user;
    console.log("Name is " + user.name + " , and email is " + user.email);
    console.log(`Name is ${name} , and email is ${email}`);
}

printUser({
    name: "John",
    email: "john@example.com",
});

/**
 * Professor --> lecture
 * name
 * age
 * id
 * teach()
 *
 * TeachingAssitent --> labs, practical session
 * name
 * age
 * id
 * teach()
 *
 * Student
 * name
 * age
 * id
 * attend(Professor | TA)
 *
 */
