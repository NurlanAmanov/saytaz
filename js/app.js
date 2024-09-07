const mobilemenu = document.getElementById('mobilemenu');
const langs=document.getElementById('langs')
const langs2=document.getElementById('langs2')
const mobileDropdown=document.getElementById('mobileDropdown')
const statiksehife = document.getElementById('statiksehife')
const murekbdizayn = document.getElementById('murekbdizayn')
const saytntc = document.getElementById('saytntc')
const əlavələrntc = document.getElementById("əlavələrntc")
const elavem = document.getElementById("elavem")
const seo = document.getElementById("seo")
const elavesayt = document.getElementById('elavesayt')
const ticntc = document.getElementById('ticntc')
const eticaret = document.getElementById('eticaret')
const dizaynlogo = document.getElementById('dizaynlogo')
const dizaynim = document.getElementById('dizaynim')
const logodizayn = document.getElementById('logodizayn')
const umumideyer = document.getElementById('umumideyer')
const umumhesablama = document.getElementById("umumhesablama")
const statiksehntc = document.getElementById('statiksehntc')
const openpop =document.getElementById('openpop')
let kod = ''

let goelavekod = 0
let elavegokod = 0
let ticaretgokod = 0
let dizayngokod = 0
let hesablakod = 0

function toggleDropdown(dropdownId) {
    const dropdowns = document.querySelectorAll('.mobileMenuDropdown, .term-scrollbar-dropdown, .drop');
    const selectedDropdown = document.getElementById(dropdownId); 

    dropdowns.forEach(dropdown => {
        if (dropdown !== selectedDropdown) {
            dropdown.style.display = 'none';
        }
    });

  
    if (selectedDropdown.style.display === 'none' || selectedDropdown.style.display === '') {
        selectedDropdown.style.display = 'block'; 
    } else {
        selectedDropdown.style.display = 'none'; 
    }
}

function langdeyis() {
   
    langs.style.display === "none"  || langs.style.display==='' ?   
    langs.style.display='flex'  :  langs.style.display = 'none'
   
  
}
function langdeyis2() {
   
    langs2.style.display === "none"  || langs2.style.display==='' ?   
    langs2.style.display='flex'  :  langs2.style.display = 'none'
   
  
}

function menuac() {
    mobilemenu.style.display = 'block';
}
function closedmenu() {
    mobilemenu.style.display = 'none';
    document.querySelector('body').style.overflowY = "auto";
}
function goelave() {
    let kod = 0;
    if (adminpanel.checked) kod += +adminpanel.value;
    if (bloq.checked) kod += +bloq.value;
    if (profiller.checked) kod += +profiller.value;
    if (respansiv.checked) kod += +respansiv.value;
    if (analtikiz.checked) kod += +analtikiz.value;
    if (socialmedia.checked) kod += +socialmedia.value;
    if (rezerv.checked) kod += +rezerv.value;
    if (xerite.checked) kod += +xerite.value;
    if (elaqeforma.checked) kod += +elaqeforma.value;
    if (qalareya.checked) kod += +qalareya.value;
    if (canlisohbet.checked) kod += +canlisohbet.value;
    if (mesaj.checked) kod += +mesaj.value;
    if (form.checked) kod += +form.value;
    if (saytaxtir.checked) kod += +saytaxtir.value;
    goelavekod = kod; 
    əlavələrntc.innerHTML = "₼ " + kod;
    elavem.innerHTML = "₼ " + kod;
    umuminiHesabla(); 
}
goelave();

function elavego() {
    let hesab = 0;
    if (meta.checked) hesab += +meta.value;
    if (qabaqciltexn.checked) hesab += +qabaqciltexn.value;
    if (sitemap.checked) hesab += +sitemap.value;
    if (acarsoz.checked) hesab += +acarsoz.value;
    if (basliqteq.checked) hesab += +basliqteq.value;
    elavegokod = hesab; 
    elavesayt.innerHTML = "₼ " + hesab;
    seo.innerHTML = "₼ " + hesab;
    umuminiHesabla(); 
}

function ticaretgo() {
    let ticarethesab = 0;
    if (odenis.checked) ticarethesab += +odenis.value;
    if (mehsullar.checked) ticarethesab += +mehsullar.value;
    if (filtr.checked) ticarethesab += +filtr.value;
    if (sebet.checked) ticarethesab += +sebet.value;
    if (like.checked) ticarethesab += +like.value;
    if (mehsulhaqq.checked) ticarethesab += +mehsulhaqq.value;
    ticaretgokod = ticarethesab; 
    ticntc.innerHTML = "₼ " + ticarethesab;
    eticaret.innerHTML = "₼ " + ticarethesab;
    umuminiHesabla();
}

function dizayngo() {
    let artim = +dizaynim.value;
    let dizaynhesab = (artim -1) * 100;
    dizayngokod = dizaynhesab; 
    dizaynlogo.innerHTML = "₼" + dizaynhesab;
    logodizayn.innerHTML = "₼" + dizaynhesab;
    umuminiHesabla();
}

function hesabla() {
    let sehifeartim = +statiksehife.value;
    let murekebdizay = +murekbdizayn.value;
    let deyisendeyer = (sehifeartim * 0.01);
    let cemler = (murekebdizay) * 10000;
    let yekun = deyisendeyer * cemler;
    hesablakod = yekun; 
    saytntc.innerHTML = sehifeartim + " səhifə / ₼ " + yekun.toFixed(0);
    statiksehntc.innerHTML = "₼ " + yekun.toFixed(0) ;
    umuminiHesabla();
}

function umuminiHesabla() {
    let umumiNetice = goelavekod + elavegokod + ticaretgokod + hesablakod + dizayngokod;
    
    
    if (umumiNetice < 450  ) {
        umumiNetice = 450;
    }
        
    
    umumideyer.innerHTML = "₼ " + umumiNetice.toFixed(0);
}

umuminiHesabla()

goelave();
elavego();
ticaretgo();
dizayngo();
hesabla();

function sendgo() {
    
    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let notes = document.getElementById("notes").value;

    
    let message = `Ad və soyad: ${fullName}\nTelefon nömrəsi: ${phoneNumber}\nEmail: ${email}\nQeydlər: ${notes ? notes : "Yoxdur"}`;

    let encodedMessage = encodeURIComponent(message);

    let whatsappUrl = `https://api.whatsapp.com/send?phone=994703421512&text=${encodedMessage}`;
    

    window.open(whatsappUrl, '_blank');
}

function popopen(){

    openpop.style.display = "flex"
}
function opoupclos(){
    openpop.style.display = "none"
}
