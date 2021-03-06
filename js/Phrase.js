class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Displays and hides letters from phrase.
   */
  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');

    Array.from(this.phrase).forEach(letter => {
      const li = document.createElement('li');
      li.textContent = letter;
      ul.appendChild(li);
      if (li.textContent === ' ') {
        li.className = 'space';
      } else {
        li.className = `hide letter ${letter}`;
      }
    })
  };

  /**
   * Checks if chosen letter is in active phrase. Returns boolean value.
   * @param {string} letter - letter chosen by player.
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    }
    return false;
  }

  /**
   * If chosen letter is in the active phrase: show letter(s).
   * @param {string} letter
   */
  showMatchedLetter(letter) {
    const matchedLetters = document.querySelectorAll(`.${letter}`);
    matchedLetters.forEach(letter => {
      if (letter.classList.contains('hide')) {
        letter.classList.remove('hide');
        letter.classList.add('show');
      }
    });
  }
}
