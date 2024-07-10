// asynchronous function vs synchronous functions

// callback function

// Promise

// async await keywords

function add(firstNumber, secondNumber) {
    // pending, fulfilled, rejected
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = firstNumber + secondNumber;
            reject(sum);
        }, 3000);
    });
}

async function printResult() {
    const result = await add(2, 3).catch((err) => {
        console.log("err: ", err);
    });
    console.log("hello world");
    console.log(result);
}

printResult();
console.log("here");
