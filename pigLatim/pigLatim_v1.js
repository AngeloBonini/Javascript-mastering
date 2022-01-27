function englishTranslator(wordToTranslate ){ 
 const splitWords = wordToTranslate.split(" ");
 const translatedWords = splitWords.map((word)=>{
     let capital = startsWithCapital(word);
for(let position=0; position<=word.length; position++){
    if(isVowel(word.charAt(position)) ){
      let prefix =  word.substring(0, position) 
      let stem = word.substring(position, word.length)
      let endingChar = "ay"
      let  translatedWord = stem + prefix + endingChar;
    //   capital ?  translatedWord = stem.substring(0, 0).toUpperCase() + stem.substring( 1,word.length)+ prefix.substring(0, 0).toLowerCase() + prefix.substring( 1,word.length) + endingChar : translatedWord = translatedWord;
    //   translatedWord.toLowerCase().toLocaleUpperCase(position) : translatedWord = translatedWord
      
      return translatedWord
    }
}
 }).join(" ")
 console.log(translatedWords)
}

function isVowel( character){

    return /^[aeiouy]$/.test(character);
}

function startsWithCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase()
} 

englishTranslator("No littering");
englishTranslator("No shirts, no shoes, no service")
englishTranslator("No persons under 14 admitted")
englishTranslator("Hey buddy, get away from my car!")
englishTranslator("Stop")