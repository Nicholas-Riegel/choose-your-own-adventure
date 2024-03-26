const prompt = require("prompt-sync")()

let answer = prompt("Answer a or b: ")
while (answer !== 'a' && answer !== 'b'){
  answer = prompt("Answer a or b: ")
}
console.log('finished with '+ answer)

