//10. Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// - Write three JavaScript statement which provide falsy value.

// (1) statement which provide truthy value.

if("0")
console.log("\"0\" is a truthy value");

if({})
console.log("{} is a truthy value");

if(Infinity)
console.log("Infinity is a truthy value");



// (2) statement which provide falsy value.

if("")
 // Not reachable
console.log("empty string \"\" is a falsy value");

if(null)
 // Not reachable
console.log("null is a falsy value");

if(undefined)
 // Not reachable
console.log("undefined is a falsy value");