//constructor
var str = new String( "This is string" );
console.log("str.constructor is:" + str.constructor);

//length
var uname = new String("Hello World")
console.log(uname)
console.log("Length "+uname.length)  // returns the total number of characters
                                     // including whitespace

//prototype
function employee(id:number,name:string) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123,"Smith");
employee.prototype.email="smith@abc.com";
console.log("Employee 's Id: "+emp.id);
console.log("Employee's name: "+emp.name);
console.log("Employee's Email ID: "+emp.email);


//charAt()
var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charAt(0));
console.log("str.charAt(1) is:" + str.charAt(1));
console.log("str.charAt(2) is:" + str.charAt(2));
console.log("str.charAt(3) is:" + str.charAt(3));
console.log("str.charAt(4) is:" + str.charAt(4));
console.log("str.charAt(5) is:" + str.charAt(5));

//charCodeAt()
var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charCodeAt(0));
console.log("str.charAt(1) is:" + str.charCodeAt(1));
console.log("str.charAt(2) is:" + str.charCodeAt(2));
console.log("str.charAt(3) is:" + str.charCodeAt(3));
console.log("str.charAt(4) is:" + str.charCodeAt(4));
console.log("str.charAt(5) is:" + str.charCodeAt(5));

//concat()
var str1 = new String( "This is string one" );
var str2 = new String( "This is string two" );
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : "+str3)

//indexOf()
var str1 = new String( "This is string one" );

var index = str1.indexOf( "string" );
console.log("indexOf found String :" + index );

var index = str1.indexOf( "one" );
console.log("indexOf found String :" + index );

//