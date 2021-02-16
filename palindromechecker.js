const inputText = document.getElementById('input-text')

function palindrome() {
  let regex = /[a-z0-9]/g;
let newStr = inputText.value.toLowerCase().match(regex);
let revStr = [];
newStr.map(x => revStr.unshift(x))
let answer = [];
console.log(newStr)

for (let i=0; i < newStr.length; i++) {

  if(newStr[i] == revStr[i]) {
    answer.push(true);
  } 
  else {answer.push(false)}
}

document.getElementById('answer').innerText = answer.every(x => x==true);
// alert(answer.every(x => x==true)) 
// return answer.every(x => x==true)

}
