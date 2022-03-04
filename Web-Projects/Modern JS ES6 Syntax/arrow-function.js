//----- By default JS, takes all the functions in a script and hoists them to the top before executing the script.
//----- So, you can call a function before/after its declaration without a problem.
//----- But it doesnt do this for arrow-functions syntax, so order matters, can only call the function AFTER its declaration.
function normalSyntax() {
  return;
}

//altSyntax1(); //---- As expected this throws error: Cannot access 'altSyntax' before initialization

const altSyntax1 = () => {
  return;
};

altSyntax1(); //this won't throw error bcause its calling the funct after its declaration.

//
//
//

//If you don't have the function body, you don't have to explicitly write the 'return' keyword, it is implicitly returned.
//If you do have the function body, then you have to explicitly write 'return'.
const altSyntax2 = () => 200;
console.log(altSyntax2()); //returns: 200

//
//
//

const altSyntax3 = (arg) => arg ** 2;
console.log(altSyntax3(100)); //returns: 10000

//
//
//

//Can ommit the () if we only have one argument. But if we have no args or more than one args, the we need ()
//VS Code is automatically the brackets around (arg) below, but it should work without them for one arg.
const altSyntax4 = (arg) => arg ** 2;
console.log(altSyntax4(100)); //returns: 10000

//
//
//
