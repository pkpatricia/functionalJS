var funcCaller = function(func, arg) {

  return func(arg);
}

var firstVal = function(arr, func) {

  func(arr[0], 0, arr);
}

var firstVal = function(collection, func) {

  if (Array.isArray(collection)) {
    func(collection[0], 0, collection)

  } else if(typeof(collection) === "Object") {

   func(Object.keys(collection[0],0, Object.keys(collection))); 
  }
}
