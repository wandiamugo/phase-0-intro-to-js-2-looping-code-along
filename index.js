// Code your solutions in this file
function writeCards(arrayName,eventName){
    let thankYou= [];
    for (let i=0; i<arrayName.length;i++) {
        thankYou.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`)
    }  return thankYou;
}

function countDown(number){
    while (number>0){
        console.log(number);
        number--;
    }  console.log(number);
} 