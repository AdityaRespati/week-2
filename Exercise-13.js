function xo(str) {
    var strLength=str.length
    var JumlahO = 2
    var JumlahX = 2
   for (var i=0; i<strLength; i++){
       if (str.charAt(i)==='o'){
           JumlahO= JumlahO + 1
       }
       else if (str.charAt(i)==='x'){
           JumlahX = JumlahX + 1
       }
    }
        return JumlahO=== JumlahX
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true