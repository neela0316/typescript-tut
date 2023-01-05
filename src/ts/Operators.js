var a = 10;
var b = 5;
console.log(" Arithmetic Operators ");
console.log("a =", a, " b =", b);
console.log("+ Addition ", a + b);
console.log("- Subtraction ", a - b);
console.log("* Multiplication ", a * b);
console.log("/ Division ", a / b);
console.log("% Modulus ", a % b);
console.log("++ Increment ", a++);
console.log("-- Increment ", a--);
b = 20;
console.log(" Relational Operators ");
console.log("a =", a, " b =", b);
console.log("a > b is ", a > b);
console.log("a < b is ", a < b);
console.log("a >= b is ", a >= b);
console.log("a <= b is ", a <= b);
console.log("a == b is ", a == b);
console.log("a != b is ", a != b);
b = 20;
console.log(" Logical Operators ");
console.log("a =", a, " b =", b);
console.log("a > 10 && b > 10 is ", a > 10 && b > 10);
console.log("a > 10 || b > 10 is ", a > 10 || b > 10);
console.log("!(a > 10) is ", !(a > 10));
a = 2;
b = 3;
console.log(" Bitwise Operators ");
console.log("a =", a, " b =", b);
console.log("&( Bitwise AND) ", a & b);
console.log("| BitWise OR ", a | b);
console.log("^ BitWise XOR ", a ^ b);
console.log("~ BitWise Not ", ~b);
console.log("<< Left Shift ", a << 1);
console.log(">> Right Shift ", a >> 1);
console.log(">>> Right Shift With Zero ", a >>> 1);
console.log(" Assignment Operators ");
console.log("a =", a, " b =", b);
var c;
c = a + b;
console.log("= Simple Assignment (c=a+b) ", c);
c += a;
console.log("+= Add and Assignment (c += a)", c);
c -= a;
console.log("-= Subtract and Assignment (c -= a)", c);
c *= a;
console.log("Multiply and Assignment c *= a", c);
c /= a;
console.log("Divide and Assignment c /= a", c);
/**
 *  Note − Same logic applies to Bitwise operators,
 *  so they will become <<=, >>=, >>=, &=, |= and ^=.
 * */
console.log(" Miscellaneous Operators ");
var x = 4;
console.log(" The negation operator (-) ");
var y = -4;
console.log("value of x: ", x); //outputs 4
console.log("value of y: ", y); //outputs -4
console.log("String Operators: Concatenation operator (+)");
var msg = "hello" + "world";
console.log(msg);
console.log(" Conditional Operator (?) ");
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
console.log(" typeof operator ");
var num = 12;
console.log(typeof num); //output: number
console.log(" instanceof ");
