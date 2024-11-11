const checkBtn = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");
const clearRecord = document.getElementById("clear-record");


checkBtn.addEventListener("click", clickNull);


function clickNull(){
  if(inputText.value){
    if(inputText.value.length < 2 && inputText.value.length > 0){
      result.innerHTML = inputText.value + " is palindrome";
    }
  } else {
    alert("Please input a value");
  }
}

checkBtn.addEventListener("click", reversed);

function reversed(){
  if(inputText.value){
    for(let i=0; i<=inputText.value.length-1; i++){}
    let paliWord = Array.from(inputText.value);
    const palindromeSentence = paliWord.reverse().join("").replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    console.log(palindromeSentence);
    if(palindromeSentence === palindromeSentence.split("").reverse().join("")){
      console.log(palindromeSentence);
      result.innerHTML = inputText.value + " is a palindrome";
    } else {
      console.log(palindromeSentence);
      result.innerHTML = inputText.value + " is not a palindrome";
    }
  } 
}

clearRecord.addEventListener("click", allZero);

function allZero(){
  inputText.value = "";
  result.innerHTML = "";
}
