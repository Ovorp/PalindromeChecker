const inputText = document.getElementById('input-text')

function palindrome(str) {
  let regex = /[a-z0-9]/g;
let newStr = str.value.toLowerCase().match(regex);
let revStr = [];
newStr.forEach(x => revStr.unshift(x));
let answer = [];

for (let i=0; i < newStr.length; i++) {

  if(newStr[i] == revStr[i]) {
    answer.push(true);
  } 
  else {answer.push(false)}
}

document.getElementById('answer').innerText = answer.every(x => x==true);
}

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    palindrome(inputText)
  }
});