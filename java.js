let myDog = {
  'name':'Elliot Shag',
  'breed':'German Shepherd',
  'tvProgram':'Dog City',
  'notes':'the muppet animator in the TV series with puppetry'
}

myDog.mySound = "I bark loud";
window.alert ("Hello, my name is " + myDog.name +", when I bark " + myDog.mySound + ". I starred in the tv show " +myDog.tvProgram + ". My character was a " + myDog.breed + ". I was " + myDog.notes + ".");

function myDog2(){
'name' : 'Echo',
'mySound': "people get scared",
'breed': "Belgian Malinois",
'tvProgram':"Dog",
'notes':"I'm in the military"
'canTalk':"yes"
}

function myDog3(){
this.name= "Echo";
this.mySound = "people get scared";
this.breed= "Belgian Malinois";
this.tvProgram= "Dog";
this.notes= "I'm in the military.";
}
let myDog2= new myDog3("");
document.write("Hello, my name is " + myDog2.name +", when I bark " + myDog2.mySound + ". I starred in the tv show " +myDog2.tvProgram + ". My character was a " + myDog2.breed + ". I was " + myDog2.notes + ".");
alert(Object.keys(myDog2));
