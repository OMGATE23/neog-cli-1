import readlineSync from 'readline-sync'

var name = readlineSync.question("What is your name ? ")
console.log("\nWelcome to the quiz ", name)

let qna = [
  {
    question: "What is my favourite color",
    options: "A. Black \nB. Orange \nC. Purple \nD. Blue",
    answer: "A"
  },
  {
    question: "What is my ice cream flavor",
    options: "A. Black current \nB. Mango \nC. Chocolate \nD. Rajbhog",
    answer: "C"
  },
  {
    question: "Which field am I in",
    options: "A. Computer \nB. Mechanical \nC. IT \nD. E&TC",
    answer: "B"
  },
  {
    question: "Which is my favourite cricketer",
    options: "A. Chris Gayle \nB. Shane Warne \nC. Virat Kohli \nD. Rohit Sharma",
    answer: "A"
  },
  {
    question: "Which is my favourite food",
    options: "A. Biryani \nB. Dosa \nC. Pizza \nD. Burger",
    answer: "A"
  }


]

  let score = 0

function play(index) {
  console.log("-----------------------------------")
  console.log("Question no: ", index + 1)
  console.log(qna[index].question)
  console.log(qna[index].options)
  var answerGiven = readlineSync.question("Enter answer: ")
  console.log("answer: ", qna[index].answer)
  if (answerGiven.toUpperCase() == qna[index].answer) {
    console.log("Correct Answer")
    score++
  } else {
    console.log("Wrong Answer")}

  }


  for (let i = 0; i < qna.length; i++) {

  play(i)
  console.log("-----------------------------------")

}

console.log("Your final score is = ", score)

switch (score) {
  case 5:
    console.log("Full score well done!!");
    break;

  case 4:
    console.log("Almost full nice!");
    break;

  case 3:
    console.log("Lets learn more about each other")
    break;

  case 2:
    console.log("Lets meet once to learn about other")
    break;

  case 1:
    console.log("Do we even know each other?")
    break;

  case 0:
    console.log("Did you even try bro?")
    break;
}
