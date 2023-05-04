const checkEven = (input) => {
    return new Promise((resolve, reject) => {
        if (input % 2 === 0) {
            resolve('Number is even');
        } else {
            reject('Number is not even');
        }
    });
};

checkEven(5)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

checkEven(6)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

const checkTypeIsString = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input === 'string') {
            resolve('Type is a string');
        } else {
            reject('Type is not a string');
        }
    });
};

checkTypeIsString('Hello')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

checkTypeIsString(5)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
