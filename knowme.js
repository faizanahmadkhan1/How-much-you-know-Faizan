var readLineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readLineSync.question(chalk.cyan('Enter Your Name:  '))
console.log(chalk.green("-----------------"))
console.log(chalk.blue.bold(`Welcome ${userName} to Game ! Guess How much you Know me ?`))
console.log(chalk.hex('#DFFF00').underline('Thanks to Tanay Bhaiya!'))
console.log(chalk.grey("----------------"))
console.log(chalk.white.bold(`Instructions`))
console.log(chalk.grey("----------------"))
console.log(chalk.white.bold(`There are 10 Questions carrying 2 points Each`))
console.log(chalk.white.bold(`Enter Correct option number against question directly and press Enter for next Question.`))
console.log(chalk.white.bold(`Sharing your Score Screenshot is compulsory.`))
console.log(chalk.grey("----------------"))
console.log(chalk.grey("Guess Following about Faizan Ahmad Khan"))
var score = 0

var questions = [{
  question: `What is my favourite food from childhood ?
 1.Chicken Biryani
 2.Mutton Biryani
 3.Chole Bhature
 4.All of Above`,
  faiz: "3"
},
{
  question: `What is my favourite colour?
 1.Red
 2.Yellow
 3.Blue
 4.Black`,
  faiz: "4"
},
{
  question: `My favourite Car is?
  1.Maruti Suzuki Ertiga
  2.Maruti Suzuki Baleno
  3.Hyundai i20
  4.Toyota Etios`,
  faiz: "2"
},
{
  question: `Which ice-cream flavor does Faizan like the most?
  1.Vanilla
  2.Kesar Pista
  3.Butter Scotch
  4.Chocobar`,
  faiz: "1"
},
{
  question: `When with friends, what would Faizan drink?
  1.Milk shake
  2.Fruit Juice
  3.Mazaa
  4.Vodka`,
  faiz: "1"
}
]

function play(question, faiz) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer === faiz) {
    console.log(chalk.green('Well done! Correct Answer'))
    score = score + 2;
  }
  else {
    console.log(chalk.red('Oopss !!! Incorrect Answer'))
  }
  console.log("You scored " + chalk.cyanBright
    (score))
  console.log(chalk.yellow("-----------------------"))
}

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].faiz)
}
console.log(chalk.magentaBright.bold(` ${userName} Your Final Score is:`, score))


console.log(chalk.magentaBright("Send me your score in screenshot"))

//Below is link for CLI app to play guess about me.

//https://replit.com/@faizanahmadkhan/How-much-you-know-Faizan-Ahmad-khan?embed=1&output=1#index.js