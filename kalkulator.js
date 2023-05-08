// angka
// const btnNol =  document.getElementById('nol')
// const btnSatu =  document.getElementById('satu')
// const btnDua =  document.getElementById('dua')
// const btnTiga =  document.getElementById('tiga')
// const btnEmpat =  document.getElementById('empat')
// const btnLima =  document.getElementById('lima')
// const btnEnam =  document.getElementById('enam')
// const btnTujuh =  document.getElementById('tujuh')
// const btnDelapan =  document.getElementById('delapan')
// const btnSembilan =  document.getElementById('sembilan')
const number = document.querySelectorAll('.angka')

// operator
const display = document.getElementById('display')
const btnKurang = document.getElementById('kurang')
const btnTambah = document.getElementById('tambah')
const btncheck = document.getElementById('check')
const btnKali = document.getElementById('kali')
const btnBagi = document.getElementById('bagi')
const btndel = document.getElementById('delete')
const result = document.getElementById('samadengan')

let first_number ="";
let second_number ='';
let operasi= "";
let sum = "";



// operator
btnTambah.addEventListener('click', function(){
    operasi = '+';
    display.innerText = operasi;
    console.log(operasi, "operasi", typeof operasi)
    // console.log(display);
})
btnKurang.addEventListener('click', function(){
    operasi = "-";
    display.innerText= operasi;
    console.log(operasi, "operasi", typeof operasi)
})
btnBagi.addEventListener('click', function(){
    operasi = "/";
    display.innerText= operasi;
    console.log(operasi, "operasi", typeof operasi)
})
btnKali.addEventListener('click', function(){
    operasi = "x";
    display.innerText= operasi;
    console.log(operasi, "operasi", typeof operasi)
})
btndel.addEventListener('click', function(){
    operasi = "del";
})
btncheck.addEventListener('click', () => {
    // console.log("" === 0)
    console.log([] == 0)
    console.log( "" == null)
})

// number
number.forEach(function(button){
    button.addEventListener('click', function(){
        const nilai = button.innerText;
        console.log(operasi, 'operasi', 'typeof', typeof operasi);
        if(operasi === ""){
            first_number += parseInt(nilai);
            display.innerText = first_number; 
        } else {
            second_number += parseInt(nilai);
            display.innerText = second_number;
            console.log(nilai, 'nilai 2')
        }
    })
})


// operations result
result.addEventListener('click', function(){
    if (operasi === "+"){
        sum = parseInt(first_number) + parseInt(second_number);
        display.innerText = parseInt(sum);
    } else if (operasi === "-"){
        sum = parseInt(first_number) - parseInt(second_number)
        display.innerText = sum;
    } else if (operasi === "/"){
        sum = parseInt(first_number) / parseInt(second_number)
        display.innerText = sum;
    } else if (operasi === "x"){
        sum = parseInt(first_number) * parseInt(second_number)
        display.innerText = sum;
    } else {
        display.innerText= "gatau berapa";
    }
    // console.log("first_number", first_number)
    // console.log("operasi", operasi)
    // console.log("second_number", second_number)
})


btndel.addEventListener('click',function(){
    first_number = "";
    second_number = '';
    sum = "";
    operasi = "";
    display.innerText= "0";
})

// console.log(btndel)