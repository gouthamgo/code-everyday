/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    // returns a promose ==> to resolve
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${n} seconds`);
        }, n * 1000); 
    });


}

module.exports = wait;
