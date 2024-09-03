const mobilemenu = document.getElementById('mobilemenu');
const sehifesayi=document.getElementById('sehifesayi')
const dizayndeyer=document.getElementById('dizayndeyer')
const saytntc=document.getElementById('saytntc')
let kod=''

function menuac() {
    mobilemenu.style.display = 'block';
}
function closedmenu() {
    mobilemenu.style.display = 'none';
}


function hesabla(){
    let kod=''
    let hesabim1= dizayndeyer.value * 100
    let hesabim2=sehifesayi.value * 100
    let cem=(hesabim1+hesabim2)
    saytntc.innerHTML= sehifesayi.value +  " səhifə / " + cem
}
hesabla()