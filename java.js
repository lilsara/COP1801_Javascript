let myDog = {
  'name':'Elliot Shag',
  'breed':'German Shepherd',
  'tvProgram':'Dog City',
  'notes':'the muppet animator in the TV series with puppetry'
}

myDog.mySound = "I bark loud";
window.alert ("Hello, my name is " + myDog.name +", when I bark " + myDog.mySound + ". I starred in the tv show " +myDog.tvProgram + ". My character was a " + myDog.breed + ". I was " + myDog.notes + ".");

function myDog3(name, mySound, breed, tvProgram, notes){
this.name= name;
this.mySound = mySound;
this.breed= breed;
this.tvProgram= tvProgram;
this.notes= notes;
}
let myDog2= new myDog3("Echo", "people get scared", "Belgian Malinois", "Dog", "a military dog");
document.write("Hello, my name is " + myDog2.name +", when I bark " + myDog2.mySound + ". I starred in the tv show " +myDog2.tvProgram + ". My character was a " + myDog2.breed + ". I was " + myDog2.notes + ".");
