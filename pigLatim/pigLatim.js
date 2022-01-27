function englishTranslator(wordToTranslate) {
  const splitWords = wordToTranslate.split(/\s*\b\s*/);
  let translatedWords = splitWords
    .map((word) => {
      for (let position = 0; position <= word.length; position++) {
        if (isVowel(word.charAt(position))) {
          const prefix = word.substring(0, position);
          const stem = word.substring(position, word.length);
          const endingChar = "ay";
          let translatedWord = stem + prefix + endingChar;
          translatedWord = checkStartsWithCapital(word)
            ? capitalizeFirstLetter(translatedWord)
            : translatedWord;
          return translatedWord;
        }
      }
    })
    .join(" ");

  console.log(translatedWords);
}

function isVowel(character) {
  return /^[aeiouy]$/.test(character);
}

function checkStartsWithCapital(word) {
  return word.charAt(0) === word.charAt(0).toUpperCase();
}

function capitalizeFirstLetter(word) {
  const wordToLowerCase = word.toLowerCase();
  const upperLetter = wordToLowerCase.charAt(0).toUpperCase();
  const restOfWord = wordToLowerCase.slice(1);
  const upperCaseWord = upperLetter + restOfWord;
  return upperCaseWord;
}

// englishTranslator("Stop");
// englishTranslator("No littering");
englishTranslator("No shirts, no shoes, no service.");
// englishTranslator("No persons under 14 admitted");
// englishTranslator("Hey buddy, get away from my car!");
