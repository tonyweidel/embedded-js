//declare samecolor() here
function samecolor(){
  let doc = document;
  let div = doc.querySelectorAll("#samecolor div");
  for(let i=0;i<div.length;i++){
    div[i].style.backgroundColor = "#ff0000";
    div[i].style.opacity += [i]*.25
  }
}
//declare diffcolor() here
function diffcolor(){
  let doc = document;
  let div = doc.querySelectorAll("#diffcolor div");
  for(let i=0;i<div.length;i++){
    if([i]%2 == 1){
      doc[i].style.backgroundColor = "#0000ff";
    }
    else{
      doc[i].style.backgroundColor = "#ffff00;"
    }
  }
}


//We're no strangers to love
//You know the rules and so do I
//A full commitment's what I'm thinking of
//You wouldn't get this from any other guy

//I just want to tell you how I'm feeling
//Gotta make you understand

//Never gonna give you up, never gonna let you down
//Never gonna run around and desert you
//Never gonna make you cry, never gonna say goodbye
//Never gonna tell a lie and hurt you

//We've known each other for so long
//Your heart's been aching but you're too shy to say it
//Inside we both know what's been going on
//We know the game and we're gonna play it

//And if you ask me how I'm feeling
//Don't tell me you're too blind to see

//Never gonna give you up, never gonna let you down
//Never gonna run around and desert you
//Never gonna make you cry, never gonna say goodbye
//Never gonna tell a lie and hurt you

//Never gonna give you up, never gonna let you down
//Never gonna run around and desert you
//Never gonna make you cry, never gonna say goodbye
//Never gonna tell a lie and hurt you

//We've known each other for so long
//Your heart's been aching but you're too shy to say it
//Inside we both know what's been going on
//We know the game and we're gonna play it

//I just want to tell you how I'm feeling
//Gotta make you understand

//Never gonna give you up, never gonna let you down
//Never gonna run around and desert you
//Never gonna make you cry, never gonna say goodbye
//Never gonna tell a lie and hurt you
