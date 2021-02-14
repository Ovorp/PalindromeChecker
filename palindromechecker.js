function palindrome(str) {
  let regex = /[a-z0-9]/g;
let newStr = str.toLowerCase().match(regex);
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
return answer.every(x => x==true)

}



let a = palindrome("A man, a plan, a canal. Panama");
console.log(a)
