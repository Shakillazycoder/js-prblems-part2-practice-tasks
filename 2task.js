function getSmallestName(words){
 let smallChar = words[0];
 for(const word of words){
    if(word.length<smallChar.length){
        smallChar = word
    }
 }
 return smallChar
}

const words = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallName = getSmallestName(words);
console.log(smallName);