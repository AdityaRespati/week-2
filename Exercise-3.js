

var nama='Adit'
var peran='Tabib'

if (nama==''){
  console.log ('Nama harus diisi!')
}
else if (peran=='') {
  console.log ('halo '  + nama + ', Pilih peranmu untuk memulai game!')  
} 

else if (peran=='Ksatria'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n'+ 'Halo ' + peran + ' ' + nama +', kamu dapat menyerang dengan senjatamu!')
  }

else if (peran=='Tabib'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n'+ 'Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
  }

else if (peran=='Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n'+ 'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  }