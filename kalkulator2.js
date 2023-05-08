// declare dom
const tambah = document.getElementById('tambah').innerText;
const kurang = document.getElementById('kurang').innerText;
const bagi = document.getElementById('bagi').innerText;
const kali = document.getElementById('kali').innerText;
const number = document.querySelectorAll('angka').innerText;
const result = document.getElementById('samadengan').innerText;
const display = document.getElementById('display').innerText;

// angka
const btnNol =  document.getElementById('nol')
const btnSatu =  document.getElementById('satu')
const btnDua =  document.getElementById('dua')
const btnTiga =  document.getElementById('tiga')
const btnEmpat =  document.getElementById('empat')
const btnLima =  document.getElementById('lima')
const btnEnam =  document.getElementById('enam')
const btnTujuh =  document.getElementById('tujuh')
const btnDelapan =  document.getElementById('delapan')
const btnSembilan =  document.getElementById('sembilan')
// variabel penghubung
let first = 0;
let second = 0;
let operasi = " ";


// number.forEach(function(intg){
//     intg.addEventListener('click', function(){
//         const nilai = intg.innerText
//         if(operasi ===''){
//             first += parseInt(nilai);
//             display.innerText = first; 
//         } else{
//             second += parseInt(nilai);
//             display.innerText = second;
//         }
//     })
    
// })

// number
// number.addEventListener('click', function(){
//     let nilai = number();
//     if(operasi !== 0){
//         first += parseInt(nilai);
//         display.innerText = first;
//     } else {
//         second += parseInt(nilai);
//         display.innerText = second;
//     }
// })

btnSatu.addEventListener('click', function(){
    let nilai = btnSatu;
    if (display !== 0){
        first += parseInt(nilai)
        display.innerText = first;
    } else{
        second += parseInt(nilai)
        display.innerText = second;
    }
})

// operator

tambah.addEventListener('click', function(){
    let sum = 0
    if (operasi == '+'){
        sum = first + second;
        display.innerText = sum;
    } else {
        display.innerText = "ga jelas"
    }
})
