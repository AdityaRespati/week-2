/*//NOMOR 1

for (var rows=5; rows>=1; rows--){
    console.log('*')
}

//NOMER 2
//---------------
var rows2=5

for (var i=0; i<rows2; i++){
    var bintang=''
    for (var j=0; j<rows2; j++){
  bintang=bintang + '*'}
  console.log (bintang)
}

//NOMER 3
//---------------
var rows2=5

for (var i=0; i<=rows2; i++){
    var bintang=''
    for (var j=0; j<i; j++){
  bintang=bintang + '*'}
  console.log (bintang)
}
*/
//latian

var rows2=5

for (var i=0; i<rows2; i++){
    var bintang=''
    for (var j=0; j<rows2; j++){
        if (j===0 || j===rows2-1 || i===0 ||i === rows2-1){
            bintang+= '*'
        }
        else {
            bintang+= ' '
        } }
  console.log (bintang)
}