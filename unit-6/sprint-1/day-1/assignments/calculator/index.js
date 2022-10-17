//first will create a constant argvs, this will contain the arguments that the user passes in the command line
const argvs = process.argv;

//create another const argv and set it to argvs withe the slice method.
//Since the first two arguments passed in the command line are irrelevant to the program because the first one is ‘node’ itself since we use it to run the application and second is the name of the file which we want it to execute in our case its ‘app.js’, so we have to remove it by using slice method.
const argv = argvs.slice(2)

//now will  Set the remaining arguments inside ‘argv’ array to different constants
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2])

//now set operator for different operations
if(operation === "add") {
    console.log(operation + "is" + (operator1 + operator2))
}
if(operation === "subtract") {
    console.log(operation + "is" + (operator1 - operator2))
}
if(operation === "multiply") {
    console.log(operation + "is" + (operator1 * operator2))
}
if(operation === "division") {
    console.log(operation + "is" + (operator1 / operator2))
}

