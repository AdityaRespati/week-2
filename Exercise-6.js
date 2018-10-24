//NOMER 1
var start=0

while (start<20) {
  if (start===0){
    console.log ('LOOPING PERTAMA')
  }
  start+=2
    console.log (start + ' - i love coding')
}

while (start>0) {
  if (start===20){
    console.log ('LOOPING KEDUA' )
  }
    console.log (start + ' - i will become fullstack developer')
    start=start-2
}
//----------------------
//NOMER 2


console.log ('looping pertama')
for (var start=2; start<=20; start+=2){
  console.log (start + ' - i love coding')
}

console.log ('looping kedua')
for (var start=20; start>=2; start-=2){
  console.log (start + ' - i love coding')
}

//----------------------
//NOMER 3

var hasil=''

console.log ('Ganjil-Genap' )

for (var i=1; i<101; i++){
    if(i%2===0){hasil='genap'}
    else {hasil='ganjil'}
    console.log(hasil)
}

console.log ("\n" + 'PERTAMBAHAN 2' + "\n")

for (var i=1; i<101; i+=2){
    if (i%3===0){hasil= i +' kelipatan 3'}
    else {hasil=''}
    console.log(hasil)
}

console.log ("\n" + 'PERTAMBAHAN 5' + "\n")

for (var i=1; i<101; i+=5){
    if (i%6===0){hasil= i +' kelipatan 6'}
    else {hasil=''}
    console.log(hasil)
}

console.log ("\n" + 'PERTAMBAHAN 9' + "\n")

for (var i=1; i<101; i+=9){
    if (i%10===0){hasil= i +' kelipatan 10'}
    else {hasil=''}
    console.log(hasil)
}


