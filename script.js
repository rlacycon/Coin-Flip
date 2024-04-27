var flipCount = 0;
var headsCount = 0;
var tailsCount = 0;

function flipCoin() {
  var randomNumber = Math.floor(Math.random() * 2);
  
  var imageSrc;
  var result;

  if (randomNumber === 0) {
    result = 'Heads';
    headsCount++;
    imageSrc = 'assets/heads.jpg';
  } else {
    result = 'Tails';
    tailsCount++;
    imageSrc = 'assets/tails.jpg';
  }

  flipCount++;

  var coinImage = document.getElementById('coinImage');
  coinImage.src = imageSrc;

//I used W3schools t help me create new rows in the table

  var tableBody = document.getElementById('flipTable').getElementsByTagName('tbody')[0];
  
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${flipCount}</td>
    <td>${result}</td>
  `;
  tableBody.appendChild(newRow);

  document.getElementById('headsCount').textContent = 'Heads: ' + headsCount;
  document.getElementById('tailsCount').textContent = 'Tails: ' + tailsCount;
}

document.getElementById('flipButton').addEventListener('click', flipCoin);