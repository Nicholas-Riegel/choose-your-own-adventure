const prompt = require("prompt-sync")()

// begin game
const username = prompt("Welcome to this Choose Your Own Adventure game. Let's begin. Please type your name (or type 'exit' to exit the game): ")

if (username === 'exit') return;

console.log(`Welcome, ${username}! The year is 3035. You are on a spaceship on a reconnaissance mission and you receive a distress signal.`)

let signal = prompt(`Would you like to respond to the signal or ignore it? Please type either 'answer' or 'ignore' (or type 'exit' to exit the game): `);

while (signal !== 'answer' && signal !== 'ignore'){
	if(signal === 'exit') return;
	signal = prompt("Please type either 'answer' or 'ignore' (or type 'exit' to exit the game): ");
}
if (signal === "answer") {
	
	console.log(`Awesome! Now you're on your way to the distressed space crew and land on the spaceship. You dock into the ship and open the hatch, only to find you must choose between two passages - up or down`);
	let direction = prompt(`Please type either 'up' or 'down' (or type 'exit' to exit the game): `);
	while (direction !== 'up' && direction !== 'down'){
		if(direction === 'exit') return;
		direction = prompt("Please type either 'up' or 'down' (or type 'exit' to exit the game): ");
	}	
	if (direction === `up`) {
		console.log(`Great! You reach the top of the ship and hear a loud "screech!" You turn the lights on and see an alien looking at you funny!`);
		let decision1 = prompt(`Do you want to face this ferocious creature or run for your life? Please type either 'fight' or 'flee' (or type 'exit' to exit the game): `);
        
		while (decision1 !== 'fight' && decision1 !== 'flee'){
			if(decision1 === 'exit') return;
			decision1 = prompt("Please type either 'fight' or 'flee' (or type 'exit' to exit the game): ");
		}
		if(decision1 === "flee") {
            console.log(`Oh no! the creature caught up to you and ate you. Game Over...`);
        } else {
            console.log(`Good for you for deciding to fight! You used the unbeatable blaster5000 and vanquished the creature. The threat was elimniated and you saved the crew. You Win!`);
        }
	} else {
		console.log("You chose to go down. You follow a corridor until you find the crew. However, you can only take back people under 40 and who are not cooks.")
		const crew = [
			{
				name: "John",
				profession: 'navigator',
				age: 40
	 		}, 
			{
				name: "Jane",
				profession: 'cook',
				age: 30
	 		}, 
			{
				name: "Mike",
				profession: 'navigator',
				age: 20
	 		}, 
			{
				name: "Alice",
				profession: 'engineer',
				age: 24
	 		} 
		]
		for(let i = 0; i < crew.length; i++){
			if (crew[i].age < 40 &&  (crew[i].profession === 'navigator' || crew[i].profession === 'engineer')) {
				console.log(`You saved ${crew[i].name}`)
			} else if (crew[i].profession === 'cook'){
				console.log(`${crew[i].name} is a cook.`)
			} else {
				console.log(`${crew[i].name} is too old and had to stay behind`)
			}
		}
	}
} else {
    console.log(`Space Warrior ${username}, you are not a true galactic hero! Game Over...`);
}