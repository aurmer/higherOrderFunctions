//  Part I

// ----------------------------
// write your own forEach() function.
// your function should take an array and a callback as input.
// it should run the callback on each element in the array.
// ----------------------------
function forEach(inputArray, cbFunc) {
  for(var i = 0; i < inputArray.length; i++) {
    inputArray[i] = cbFunc(inputArray[i])
  }
}

//  Part II
// ----------------------------
// write your own map() function.
// your function should take an array and a callback as input.
// it should return a new array, where every element in the
// original has been transformed by the callback. .
// ----------------------------
function map(inputArray, cbFunc) {
  var resultArray = []
  for(var i = 0; i < inputArray.length; i++) {
    resultArray.push(cbFunc(inputArray[i]))
  }
  return resultArray
}

//  Part III
// ----------------------------
// write your own filter() function.
// your function should take an array and a callback as input.
// it should return a new array, where elements have been
// kept or excluded according to the callback.
// ----------------------------
function filter(inputArray, cbFunc) {
  var resultArray = []
  for(var i = 0; i < inputArray.length; i++) {
    if(cbFunc(inputArray[i])) {
      resultArray.push(inputArray[i])
    }
  }
  return resultArray
}


//  Part IV
// ----------------------------
// write your own reduce() function.

// this one's new. it should take an array, a callback and
// a starting value as input.

// calling .reduce() should combine all the elements of the
// array into a single value. the starting value tells what to
// start with.

// the callback should take as input a "running total" and
// an array element, in that order. it should return an update
// to the running total.

// look at the tests for clarification.
// ----------------------------
function reduce(inputArray, cbFunc, startVal) {
  var cumulativeResult = startVal

  for(var i = 0; i < inputArray.length; i++) {
    cumulativeResult = cbFunc(cumulativeResult, inputArray[i])
  }

  return cumulativeResult
}


//  HARD MODE
// ----------------------------
// using the built-in array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

people.sort( (a,b) => a.name.localeCompare(b.name) )



// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname

// store the resulting mapped, filtered, and sorted array
// under the variable name `newCustomers`. i'll look
// for that name in my tests.
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

customers = customers.filter(a => a.first.charAt(0) === 'J')
//newCustomers = customers.map( a => { fullname: `${a.first} ${a.last}`})
newCustomers = customers.map( function(a) { return { fullname: `${a.first} ${a.last}`} } )
newCustomers.sort( (a,b) => a.fullname.localeCompare(b.fullname))
console.log(newCustomers)
