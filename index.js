function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const totalResult = document.getElementById("totalResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  if (numOfDice < 1 || numOfDice > 50) {
    alert("Please enter a number between 1 and 50");
    return;
  }

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent = `dice: ${values.join(`, `)}`;
  totalResult.textContent = `total: ${values.reduce((a, b) => a + b)}`;
  diceImages.innerHTML = images.join(``);
}
