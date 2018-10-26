function konversiMenit(menit) {
    var digitMenit= menit % 60
    var digitJam= (menit -digitMenit)/60
    if(digitMenit<10){
        return digitJam + ':' + '0' +digitMenit
    }
    else{
        return digitJam + ':' + digitMenit}
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00