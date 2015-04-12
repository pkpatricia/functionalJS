 var nonsense = function() {
  var blab = function(){
     alert(string);
   };
   blab();  
 };

var nonsense = function() {
  var blab = function(){
     alert(string);
   };
   setTimeout(blab, 1000);  
 };

var nonsense = function () {
  var blabLater = function(){
     alert(string);
  };
  return blabLater;
}

var nonsense = function () {
  var blabAgainLater = function(){
     alert(string);
  };
  return blabAgainLater;
}

blabLater();
blabAgainLater();


var lastNameTrier = function(firstName) {

  var innerFunction = function(lastName) {
    console.log(firstName, lastName);
  };

  return innerFunction;

};

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');

var storyWriter = function () {
  var story = "";

  return {
    addWords: function(word) { In += " " + story; },
    erase: function() {
      story = "";
      return story;
    }
  }
}

var farmLoveStory = storyWriter();
  farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
  farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
  
  var storyOfMyLife = storyWriter();
  storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
  storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
  storyOfMyLife.erase(); // ''


  var Toaster = function(){
    //some private methods and properties
    var privateToaster = "sargent";

    function privateMethod (argument) {
      return privateToaster += string;
    }

    return {
      //some public methods and properties, etc
      loadToast: function(args) {
        
      }
    };
};




   