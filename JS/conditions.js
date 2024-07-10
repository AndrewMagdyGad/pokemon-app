const score = 60;

// conditional statements

if (score >= 90) {
    console.log("Grade is excellent");
} else if (score >= 80) {
    console.log("Grade is very good");
} else if (score >= 70) {
    console.log("Grade is good");
} else {
    console.log("Student has failed");
}

// Ternary operator

// condition ? expr1 : expr2;

const isEven = score % 2 == 0 ? true : false;
