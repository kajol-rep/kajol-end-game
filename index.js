var readlinesync = require("readline-sync");
console.log("LETS GET STARTED --->");
var username = readlinesync.question("What is your name? ");
console.log("WELCOME " + username + "! LETS SEE HOW MUCH YOU KNOW KAJOL");
var score=0;
function game(question,answer){
  var useranswer = readlinesync.question(question);
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log("Good job you are right!!");
    score = score+1;
  }
  else{
    console.log("OOPS you are wrong!!");
  }
  
}

var questions = [
  {
    question:"Where do I live? ",
    answer:"bangalore"
  },
  {
    question:"Will I choose dog over cat? ",
    answer:"yes"
  }
  
];

var highscores= [
  {
    name:"kajol",
    score: 2,
  }
]
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question,currentQuestion.answer);
  console.log("-------------------------")
}
console.log("YAY! your score is: " + score);