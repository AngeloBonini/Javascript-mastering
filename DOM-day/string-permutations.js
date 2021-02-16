function permutations(str){
    let anagram;
    let newStr= [...str];

    // while(anagram !== newStr){
        for(let i = newStr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = newStr[i]
            newStr[i] = newStr[j]
            newStr[j] = temp
          }
          console.log(newStr);
        // anagram = str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
        // console.log(anagram);
    // }
}
permutations("bunda");

// for(let i = newStr.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i)
//     const temp = newStr[i]
//     newStr[i] = newStr[j]
//     newStr[j] = temp
//   }