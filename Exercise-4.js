var tanggal = 1
var bulan = 9
var tahun = 1900

if (tanggal <1 || tanggal > 31 || tahun <1900 || tahun >2200 || bulan <1 || bulan >12)
{
  console.log('invalid date input');
}
else{

switch (bulan){
  case 1:
    console.log( tanggal + ' Januari ' +tahun  ) 
  break;
  case 2:
    console.log( tanggal + ' Februari ' +tahun  ) 
  break;  
  case 3:
    console.log( tanggal + ' Maret ' +tahun  ) 
  break;
  case 4:
    console.log( tanggal + ' April ' +tahun  ) 
  break;
  case 5:
    console.log( tanggal + ' Mei ' +tahun  ) 
  break;
  case 6:
    console.log( tanggal + ' Juni ' +tahun  ) 
  break;  
  case 7:
    console.log( tanggal + ' Juli ' +tahun  ) 
  break;
  case 8:
    console.log( tanggal + ' Agustus ' +tahun  ) 
  break;    
  case 9:
    console.log( tanggal + ' September ' +tahun  ) 
  break;
  case 10:
    console.log( tanggal + ' Oktober ' +tahun  ) 
  break;  
  case 11:
    console.log( tanggal + ' November ' +tahun  ) 
  break;
  case 12:
    console.log( tanggal + ' Desember ' +tahun  ) 
  break;
}
}
