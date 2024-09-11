// switch statement for current year
let currentYear = new Date().getFullYear();
switch (new Date().getFullYear()) {
    case 1:
        currentYear = 2000;
        break;
    case 2:
        currentYear = 2001;
        break;
    case 3:
        currentYear = 2005;
        break;
    case 4:
        currentYear = 2030;
        break;
    case 5:
        currentYear = 2010;
        break;
    case 6:
        currentYear = 2020;
        break;
    case 7:
        currentYear = 2024;
        break;
}
console.log(currentYear); 


// if-else  statement 
let c = prompt("what is your age")
c = parseInt("b");
if (c < 20) {
    c = "you are child ";
} else if (c > 20 && c < 40) {
    c = "you are adult";
} else {
    c = "you are old";
}
console.log(c);



// ternary operator
let marks = prompt('Enter your marks:');
marks = parseInt(marks); 
let result = (marks >= 20) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);