const  nama = "adrian";
let usia = 28;
let generasi;


let biodata = document.getElementById('biodata');

 
  function generateBiodata() {
    if (usia > 10 && usia < 18 ) {
        //ini adalah kondisi pertama 
       console.log ('anda remaja');
       generasi = "generasi remaja"
      } 
      
      else if (usia > 18 && usia < 30) {
       console.log ('anda sudah dewasa')
       generasi = "generasi dewasa"
      }
      else if (usia >= 30) { 
        console.log ('ah lu mah udah tua bro')
        generasi = "generasi lansia"

      }
      else if (usia > 2 && usia < 10) {
        console.log ('anda anak-anak')
        generasi = "generasi anak-anak"
      }
      
      else {
        //ini adalah kondisi jika tidak terpenuhi
       console.log ('elu siapa bro?');
       }
    
    return biodata.innerHTML = generasi;
  }

  console.log (nama);
  console.log (usia);

  generateBiodata();
