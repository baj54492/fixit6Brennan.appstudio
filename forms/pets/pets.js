//create an array
let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']


// create a new array variable
let withMarmaduke = []
withMarmaduke.push(pets)
withMarmaduke.push('Marmaduke')

let choice = prompt("Please enter 1 to remove Vinny, 2 to remove Marty, 3 to add Nancy, 4 to add your name, 5 to find index of Riley, 6 to find index of Cindy, 7 to show the withMarmaduke array,/n 8 to use the .shift() array method, 9 to add the name Barney, 10 to ")
switch (true) {

  //remove "Vinny" from the array
  case (choice == '1'):
    let posVinny = petNames.indexOf('Vinny')
    petNames.splice(posVinny, 1)
    console.log(`The action taken was: Remove Vinny\nThe remaining data are:\n[${petNames}]`)
    break
  case (choice == '2'):

    // remove "Marty" from the array
    let posMarty = petNames.indexOf('Marty')
    petNames.splice(posMarty, 1)
    console.log(`The action taken was: Remove Marty\nThe remaining data are:\n[${petNames}]`)
    break
  case (choice == '3'):

    //add "Nancy" to the front of the array.
    petNames.unshift('Nancy')
    console.log(`The action taken was: Add Nancy to the front of the array\nThe remaining data are:\n[${petNames}]`)
    break
  case (choice == '4'):

    //add their name to the end of the array after they enter their name.
    let userName = prompt('Enter your first name. ')
    petNames.push(userName)
    console.log(`The action taken was: Add ${userName} to the end of the array\nThe remaining data are:\n[${petNames}]`)
    break
  case (choice == '5'):
    // tell the user the array index where "Riley" is located in the array. 
    let posRiley = petNames.indexOf('Riley')
    console.log(`The action taken was: find the array index of Riley\nThe array index of Riley is ${posRiley}.\nThe remaining data are:\n[${petNames}]`)
    break
  case (choice == '6'):
    // tell the user the array index where "Cindy" is located
    let posCindy = petNames.indexOf('Cindy')
    console.log(`The action taken was: find the array index of Cindy\nThe array index of Cindy is ${posCindy}.\nThe remaining data are:\n[${petNames}]`)
    break
  case (choice == '7'):
    //show the 'withMarmaduke' array data.
    //console.log(`The values of the 'withMarmaduke' array are\n${withMarmaduke}`)
    console.log(`The action taken was:show the withMarmaduke array data\n${withMarmaduke}\nThe remaining data are:\n[${petNames}]`)
    break
  default:
    console.log('That was not one of the options for this program')
}


// Using the original 'pets' array, use the .shift() array method and output the results.
petNames.shift()
console.log(`The action taken was: removes the first element from an array\nThe remaining data are:\n[${petNames}]`)


//Using the .unshift() array method, add the name 'Barney' to the petNames array.
petNames.unshift('Barney')
console.log(`The action taken was: add the name Barney\nThe remaining data are:\n[${petNames}]`)


/* Using an array method of your choice, 
add the array below to the end of the petNames array 
to make a new array that you name allPets. 
Remember to show the new array in the output. 
Ted, Fred, Jed, Ned, Ed, Zed
*/
let allPets = petNames.concat('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed')
console.log(`The action taken was: create variable allPets, to add Ted, Fred, Jed, Ned, Ed, Zed to the end of the petNames array \nThe new array allPets is:\n[${allPets}]\nThe petNames array is unchanged\n[${petNames}]`)


/*
Using the array method .join(), 
create a string variable named stringPets 
that holds all of the pet names separated by commas.
*/
let stringPets = petNames.join(', ')
console.log(`The action taken was: create a string variable that holds all of the pet names separated by commas\nThe output is:\n${stringPets}\nThe petNames array is unchanged\n[${petNames}]`)


/*
Using the .unshift() array method, 
add the name 'Agnes' to the petNames array. 
*/
petNames.unshift('Agnes')
console.log(`The action taken was: adds Agnes to the beginning of an array \nThe new data are:\n[${petNames}]`)