function englishTranslator(sentence) {
  const words = sentence.split(/\b/);
  const translatedWords = words
    .map((word) => {
      const hasNoConsoants = word.split('').every((letter) => isVowel(letter));

      if (hasNoConsoants) {
        return word + 'yay';
      }

      for (let position = 0; position <= word.length; position++) {
        if (isVowel(word.charAt(position))) {
          const prefix = word.substring(0, position);
          const stem = word.substring(position, word.length);
          const translatedWord = stem + prefix + 'ay';
          return checkStartsWithCapital(word) ? capitalizeFirstLetter(translatedWord) : translatedWord;
        }
      }

      return word;
    })
    .join('');

  console.log(translatedWords);
}

function isVowel(character) {
  return /^[aeiouyAEIOUY]$/.test(character);
}

function checkStartsWithCapital(word) {
  return word.charAt(0) === word.charAt(0).toUpperCase();
}

function capitalizeFirstLetter(word) {
  const lowerCased = word.toLowerCase();
  return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
}

englishTranslator('Stop');
englishTranslator('No littering');
englishTranslator('No shirts, no shoes, no service.');
englishTranslator('No persons under 14 admitted');
englishTranslator('Hey buddy, get away from my car!');