const mobilemenu = document.getElementById('mobilemenu');
const sehifesayi=document.getElementById('sehifesayi')
const dizaynmurekb=document.getElementById('dizaynmurekb')
const saytntc=document.getElementById('saytntc')
const əlavələrntc=document.getElementById("əlavələrntc")
const elavem =document.getElementById("elavem")
const seo =document.getElementById("seo")
const elavesayt =document.getElementById('elavesayt')
const ticntc=document.getElementById('ticntc')
const eticaret=document.getElementById('eticaret')
const dizaynlogo =document.getElementById('dizaynlogo')
const dizaynim =document.getElementById('dizaynim')
const logodizayn =document.getElementById('logodizayn')
const umumideyer=document.getElementById('umumideyer')
const umumhesablama=document.getElementById("umumhesablama")
let kod=''

function menuac() {
    mobilemenu.style.display = 'block';
}
function closedmenu() {
    mobilemenu.style.display = 'none';
}
function goelave() {
   
    let kod=0
    if (adminpanel.checked) kod += +adminpanel.value;
    if (bloq.checked) kod += +bloq.value;
    if(profiller.checked) kod+=+profiller.value
    if(respansiv.checked) kod+=+respansiv.value
    if(analtikiz.checked) kod+=+analtikiz.value
    if(socialmedia.checked) kod+=+socialmedia.value
    if(rezerv.checked) kod+=+rezerv.value
    if(xerite.checked) kod+=+xerite.value
    if(elaqeforma.checked) kod+=+elaqeforma.value
    if(qalareya.checked) kod+=+qalareya.value
    if(canlisohbet.checked) kod+=+canlisohbet.value
    if(mesaj.checked) kod+=+mesaj.value
    if(form.checked) kod+=+form.value
    if(saytaxtir.checked) kod+=+saytaxtir.value
    əlavələrntc.innerHTML= "₼ "+ kod
    elavem.innerHTML="₼ "+kod
}
goelave();

function elavego(){
    let hesab=0
    if(meta.checked) hesab+=+meta.value
    if(qabaqciltexn.checked) hesab+=+qabaqciltexn.value

    if(sitemap.checked) hesab+=+sitemap.value
    if(acarsoz.checked) hesab+=+acarsoz.value
    if(basliqteq.checked) hesab+=+basliqteq.value
    
   

 elavesayt.innerHTML= "₼ " + hesab
seo.innerHTML ="₼ " + hesab 

}
elavego()

function ticaretgo(){
let ticarethesab=0
    if(odenis.checked) ticarethesab+=+odenis.value
    if(mehsullar.checked) ticarethesab+=+mehsullar.value
    if(filtr.checked) ticarethesab+=+filtr.value
    if(sebet.checked) ticarethesab+=+sebet.value
    if(like.checked) ticarethesab+=+like.value
    if(mehsulhaqq.checked) ticarethesab+=+mehsulhaqq.value
    ticntc.innerHTML=  "₼ " +ticarethesab
    eticaret.innerHTML= "₼ " +ticarethesab
}

function dizayngo() {
    let artim = +dizaynim.value;  

   let dizaynhesab=(artim-1)*100



    dizaynlogo.innerHTML = "₼" + dizaynhesab;
    logodizayn.innerHTML = "₼" + dizaynhesab;
}
dizayngo()
// function hesabla() {
//     let sehifeartim =+sehifesayi.value; 
//     let deyisendeyer = (sehifeartim) * 100;  
//     let dizaynnov = + dizaynmurekb.value; 
//     let cemler =( dizaynnov) * 100;  

//     // let umumiDeyer = deyisendeyer + cemler; 

//     saytntc.innerHTML = sehifeartim + " səhifə / ₼ " + deyisendeyer
// }
// hesabla()

