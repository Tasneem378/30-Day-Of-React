//Question2_Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer.
let userInput = prompt("Enter a month:");

if (userInput === "september" || userInput === "october" || userInput === "november") {
    alert("The season is Autumn.");
}else if(userInput === "december" || userInput === "january" || userInput === "february"){
    alert("The season is Winter.");
}else if(userInput === "march" || userInput === "april" || userInput === "may"){
    alert("The season is Spring.");
}else if(userInput === "june" || userInput === "july" || userInput === "august"){
    alert("The season is Summer.");
}else {
    alert("Invalid input. Please enter a valid month.");
}