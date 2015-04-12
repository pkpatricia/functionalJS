var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  //checks if the val is in arr

  var found = false;
  var isValue = function(element) {
    // if I find the right thing
    if(element === val) {
      // I'll change "found" to true
      found = true;
    }

  };

  // for every element in the array
  _.each(arr, isValue);


/*  for(var i = 0; i = arr.length; i++) {
    if (arr[i] === val) {
      found = true;
    }
  }
*/

  
return found;

}

console.log(checkValue(helloArr, 'hello')); //true

console.log(checkValue(helloArr, 'goodbye')); //false