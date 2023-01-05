console.log("TypeScript Number Properties: ");
console.log(" Property & Description ");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);


console.log(" Example: NaN ")
var month = 0
if( month<=0 || month >12) {
    month = Number.NaN
    console.log("Month is "+ month)
} else {
    console.log("Value Accepted..")
}

console.log("Example: prototype");
function employee(id:number,name:string) {
    this.id = id
    this.name = name
}

var emp = new employee(123,"Smith")
employee.prototype.email = "smith@abc.com"

console.log("Employee 's Id: "+emp.id)
console.log("Employee's name: "+emp.name)
console.log("Employee's Email ID: "+emp.email)

console.log("value of toExponential method ", emp.id.toExponential());
console.log("value of toFixed method ", emp.id.toFixed());
console.log("Value of toLocalString Method ", emp.id.toLocaleString());
console.log("Value of toPrecision method ", emp.id.toPrecision());
console.log("Value of toString method ", emp.id.toString());
console.log("Value of ValueOf Method ", emp.id.valueOf());

//toExponential()
var num1 = 1225.30
var val = num1.toExponential();
console.log(val)

//toFixed()
var num3 = 177.234
console.log("num3.toFixed() is "+num3.toFixed())
console.log("num3.toFixed(2) is "+num3.toFixed(2))
console.log("num3.toFixed(6) is "+num3.toFixed(6))

//toLocalString()
var num = new Number(177.1234);
console.log( num.toLocaleString());

//toPrecision()
var num = new Number(7.123456);
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));

//toString()
var num = new Number(10);
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));

//valueOf()
var num = new Number(10);
console.log(num.valueOf());