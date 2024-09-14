function intro( Name='Pammi', Location='India', Age=20 ) {
    console.log('Hello World');
    console.log(`I am  ${Name}`);    
    console.log('I am from ' + Location);
    console.log(`I am ${Age} years old`);
}

intro( 'rajkumar', 'india', 25);
intro()


// Function Definition
function introduceMe(username, profession, age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    console.log('Hi,');
    console.log(`My name is ${username || 'Procodrr'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}

// //                  Function Call
// const returnValue = introduceMe()

// introduceMe('Anurag', 'Software Engineer', 25)
introduceMe('Akash', 'Mechanical Engineer', 27)