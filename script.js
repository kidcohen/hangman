// Game used words
const words = ["apple", "banana", "orange", "grape", "strawberry"];

// Random words to be selected from the array
function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

// Check if the letter is correct for the chosen word
function checkGuess(word, guess) {
  return word.includes(guess);
}

// Letter display
function updateWord(word, guesses) {
  let displayedWord = "";
  for (const letter of word) {
    if (guesses.includes(letter)) {
      displayedWord += letter;
    } else {
      displayedWord += "_";
    }
  }
  return displayedWord;
}

// Game logic
function playHangman() {
  // Select a random word from the words array
  const selectedWord = selectRandomWord();

  // How many lives does a player get
  let lives = 6;
  const guessedLetters = [];

  // Word display
  let displayedWord = updateWord(selectedWord, guessedLetters);
  console.log(displayedWord);

  // Start game
  while (lives > 0 && displayedWord.includes("_")) {
    // Prompt the user to guess a letter
    const guess = prompt("Enter a guess: ");

    // Is the answer correct
    if (guess.length !== 1 || !/[a-zA-Z]/.test(guess)) {
      console.log("Invalid guess. Please enter a single letter.");
      continue;
    }

    // Is the letter in the word
    const isCorrectGuess = checkGuess(selectedWord, guess);

    // Guessed letters
    guessedLetters.push(guess);

    // Displayed word
    displayedWord = updateWord(selectedWord, guessedLetters);

    // Was the guess correct
    if (isCorrectGuess) {
      console.log("Correct guess!");
    } else {
      lives--;
      console.log("Incorrect guess. Lives remaining:", lives);
    }

    // Game over
    if (lives === 0) {
      console.log("You ran out of lives! The word was:", selectedWord);
    } else if (!displayedWord.includes("_")) {
      console.log("Congratulations! You guessed the word:", selectedWord);
    }
  }
}

// Start game
playHangman();