function guessNumber() {
  // Choose a number between 1 and 5
  myNumber = -1;
  while (!(myNumber >= 1 && myNumber <= 5)) {
    var myNumber = prompt("Choose an integer between 1 and 5");
  }

  var numTries = 0;
  var guess = -1;

  while (guess != myNumber) {
    guess = Math.random() * 5 + 1;
    guess = Math.floor(guess);

    numTries++;
    console.log("Try #" + numTries + ": " + guess);
  }
  console.log(
    "Got it! It was " + guess + ". It took me " + numTries + " guess(es)."
  );
}
guessNumber();
