import './style.css'


document.getElementById('sendNumber').addEventListener('click', function () {
  let number = document.getElementById('numberChooser').value;
  let result = number;
  console.log(result);
  let check = Math.sign(result);
  if (check !== 1) {
    document.getElementById('result').innerHTML = "the number is negative";
  }
  else {
    document.getElementById('result').innerHTML = "the number is positive";
  }
});
