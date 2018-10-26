function balikKata(kata) {
    var reverse = ''
    var panjangKata = kata.length
    for (var i=1; i<=panjangKata; i++){
        reverse += kata.charAt(panjangKata-i)
    }
    return reverse
} 


  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS



