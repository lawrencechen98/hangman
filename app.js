
// Hangman Game

const dictionary = [
	["B","E","N","G","A","Z","I"],
	["S","M","A","L","L"],
	["T","R","U","M","P"],
	["C","L","I","N","T","O","N"],
	["W","A","L","L"],
	["I","S","I","S"],
	["I","M","M","I","G","R","A","N","T","S"],
	["C","H","I","N","A"],
	["R","U","S","S","I","A"],
	["O","B","A","M","A"]
	];		

// Randomly chooses a word the user must guess to win the game

let random = Math.floor(Math.random()*dictionary.length);
let chosen = dictionary[random];
let spaces = new Array(chosen.length);	
let count = 0;					

// Guessing area 

for(let i = 0; i < spaces.length; i++) {
	spaces[i] = "_ ";
}
console.log(chosen);
console.log(spaces);		

// Show underscored spaces on HTML webpage

function printspaces(){
	for (let i = 0; i < spaces.length; i++){				
		let guess_space = document.getElementById("guess_space");
		let text_node = document.createTextNode(spaces[i]); 
		guess_space.appendChild(text_node);		
	}
}

//Check letter
let checkletter = function(){
	let f = document.guess_form;
	let b = f.elements["input_letter"];
	let letter = b.value;
	letter = letter.toUpperCase();


	let found = false;

	for(let i = 0; i < chosen.length; i++){
		if (chosen[i]===letter){
			spaces[i] = letter + " ";
			found = true;
		}
	}
	b.value = "";

	//print guess space with updated 
	let guess_space = document.getElementById("guess_space");
	guess_space.innerHTML="";
	printspaces();

	//if wrong guess, store it and count it
	if(!found){
		let wrong_letters = document.getElementById("wrong_letters");
		let text_node = document.createTextNode(" " + letter);
		wrong_letters.appendChild(text_node);
		count++;

		//draw hangman
		let hangman = document.getElementById("hangman");
		let image_url = "http://www.writteninpencil.de/Projekte/Hangman/hangman";
		image_url = image_url + count + ".png";
		hangman.src = image_url;
	}

	//check if word is guessd
	let word_found = true
	for (let i = 0; i < spaces.length; i++){
		if(spaces[i] === "_ "){
			word_found = false;
		}
	}

	//game end prompt!
	if(word_found){
		window.alert("You win!");
	} else if(count >= 6){
		window.alert("YOU DIED!");
	}
}





function init(){
	printspaces();
}

window.onload= init;
