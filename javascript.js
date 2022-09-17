let myDog = {
  'name':'Elliot Shag',
  'breed':'German Shepherd',
  'tvProgram':'Dog City',
  'notes':'the muppet animator in the TV series with puppetry'
}
myDog.mySound = "I bark loud";
window.alert ("Hello, my name is " + myDog.name +", when I bark " + myDog.mySound + ". I starred in the tv show " +myDog.tvProgram + ". My character was a " + myDog.breed + ". I was " + myDog.notes + ".");
class Dog{
myDogConst(theirname, theirSound, theirbreed, theirtvProgram, theirnotes, cantheytalk){
this.name= theirname;
this.mySound = theirSound;
this.breed= theirbreed;
this.tvProgram= theirtvProgram;
this.notes= theirnotes;
this.canTalk= cantheytalk;
this.message=myGreeting()
  if (this['canTalk']){
    console.log(`${this.name} can talk!`)
  }
}


let myDog2= new Dog("Echo", "people get scared", "Belgian Malinois", "Dog", "a military dog", false);
let myDog3= new Dog("Beethoven", "my bark is loud", "St.Bernard", "Beethoven", "a talking dog and friends", true);



document.write("Hello, my name is " + myDog2.name +", when I bark " + myDog2.mySound +
". I starred in the tv show " +myDog2.tvProgram + ". My character was a " + myDog2.breed +
". I was " + myDog2.notes + ". " );
document.write(myGreeting(this.canTalk));

document.write("Hello, my name is " + myDog3.name +", when I bark " + myDog3.mySound +
". I starred in the tv show " +myDog3.tvProgram + ". My character was a " + myDog3.breed +
". I was " + myDog3.notes + ". ");
document.write(myGreeting(this.canTalk));
