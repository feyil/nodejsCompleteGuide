function sayHello(name) {
    console.log("Hello " + name); //global
}

sayHello("Furkan Emre");
//console.log(window) // in node we dont have window and document objects

var message = ''; // They are not binded to the global scope only that file
console.log(global.message);

console.log(module)
