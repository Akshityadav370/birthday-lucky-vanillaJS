const dateOfBirth = document.querySelector("#dob");
const luckyNo = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

function getSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (let i of dob) {
    sum += Number(i);
  }
  return sum;
}

function isBirthdayLucky(sum, luck) {
  if (sum % luck === 0) return true;
  else return false;
}

function clickHandler(e) {
  // console.log("clicked");
  // console.log(dateOfBirth.value, luckyNo.value);
  const dob = dateOfBirth.value;
  const luck = Number(luckyNo.value);
  const sum = getSum(dob);
  if (isBirthdayLucky(sum, luck)) {
    output.innerText = "WhooHoo!! 🥳 Ur birthday is lucky!";
  } else {
    output.innerText = "Ur birthday is not lucky! 😔";
  }
}

checkBtn.addEventListener("click", clickHandler);
