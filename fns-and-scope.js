//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(yourName) {
    if (yourName === name ) {
      return true;
    }
    return false;

  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(yourName) {
  yourName = prompt('Enter your name');
  return yourName;
}




//////////////////PROBLEM 3////////////////////

function welcome(yourName) {
  yourName = getName();
  alert('Welcome, ' + yourName);
}



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

var paraArgDif = 'A parameter is the variable which is part of the method’s signature (method declaration). An argument is an expression used when calling the method.';


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


var falsyVals = 'Falsy values are: 0, false, /'/', undefined, null, NaN';

var checkFalsy = 'You can check to see if the argument == false';



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(nameOfMe) {
    nameOfMe = 'Erin';
    return nameOfMe;
  }



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {

    var anonFunc = function(nameMeAgain) {
      nameMeAgain = 'Erin Rae';
      return nameMeAgain;
    }

    return anonFunc;
  }

  console.log(outerFn());

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
