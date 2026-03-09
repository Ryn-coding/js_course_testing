// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";



// Demonstration of block scope
{
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}


// Testing global scope - all global variables are accessible
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


// Block scope demonstration - attempting to access block-scoped variables outside their block will cause errors
// Uncomment below to see ReferenceError for blockVar, blockLet, blockConst
// console.log(blockVar);
// console.log(blockLet);


// Function scope - variables declared inside a function are only accessible within that function
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();


// Function scope demonstration - attempting to access function-scoped variables outside the function causes errors
// Uncomment below to see ReferenceError
// console.log(functionVar);
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError


/**
 * Practice Task: Understanding Redeclaration and Reassignment
 * - var: Can be redeclared and reassigned
 * - let: Cannot be redeclared, but can be reassigned
 * - const: Cannot be redeclared or reassigned
 */
{
    var a = 'test A';
    let b = 'test B';
    const c = 'test C';


    // Reassignment demonstration
    var a = 'test A2'; // var can be reassigned (works)
    // let b = 'test B2'; // let cannot be redeclared, but can be reassigned outside block
    // const c = 'test C2'; // const cannot be redeclared or reassigned
}


// All can be reassigned in global scope
var a = 'Test A_'; // var can be reassigned
let b = 'Test B_'; // let can be reassigned
const c = 'Test C_'; // const can be reassigned with a new declaration at different scope