const mobilemenu = document.getElementById('mobilemenu');
const langs=document.getElementById('langs')
const langs2=document.getElementById('langs2')
const mobileDropdown=document.getElementById('mobileDropdown')
const statiksehife = document.getElementById('statiksehife')
const murekbdizayn = document.getElementById('murekbdizayn')
const dizaynim = document.getElementById('dizaynim')
const logodizayn = document.getElementById('logodizayn')
const umumideyer = document.getElementById('umumideyer')
const umumhesablama = document.getElementById("umumhesablama")
const statiksehntc = document.getElementById('statiksehntc')
const eticarets = document.getElementById('eticarets')
const openpop =document.getElementById('openpop')
const exchang =document.getElementById('exchang')
const exchang2 =document.getElementById('exchang2')
let kod = ''
let newseo=0
let newticaret=0
let newelave=0
let hesablakod = 0
let dizayngokod = 0


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

function exchgo(){
    exchang.style.display==='none' || exchang.style.display===''?
    exchang.style.display='flex' : exchang.style.display="none"
}
function exchgo2(){
    exchang2.style.display==='none' || exchang2.style.display===''?
    exchang2.style.display='flex' : exchang2.style.display="none"
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
function dizayngo() {
    let artim = +dizaynim.value;
    let dizaynhesab = (artim-1) * 100;
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
    let umumiNetice =  newticaret+ newelave +newseo +  hesablakod  + dizayngokod;
    
    
    if (umumiNetice < 450  ) {
        umumiNetice = 450;
    }
        
    
    umumideyer.innerHTML = "₼ " + umumiNetice.toFixed(0);
}

umuminiHesabla()
dizayngo();
hesabla();

function sendgo() {
 
    event.preventDefault();


    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let notes = document.getElementById("notes").value;


    if (!phoneNumber.startsWith('+994')) {
        phoneNumber = '+994' + phoneNumber.slice(1);
    }

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


function vebealve(){

    let count = 0, inputs=document.querySelectorAll("#elveler input")
    inputs.forEach(item=> {
        if(item.checked) count += +item.value
    })
    newelave=count
    əlavələrntc.innerHTML="₼"+count
    elavem.innerHTML="₼"+count
    umuminiHesabla()
}vebealve()

function axtarismotom(){
    let count =0, inputs=document.querySelectorAll("#axtarismoto input")
    inputs.forEach(item=>{
        if(item.checked) count += +item.value 
    })
    newseo=count
    axtarisntc.innerHTML= "₼"+count
    seo.innerHTML= "₼"+count

    umuminiHesabla()
}
axtarismotom()

function  tcrtgo(){
   
    let count =0, inputs=document.querySelectorAll('#eletronelave input')
    inputs.forEach(item=>{
        if(item.checked) count+=+item.value
    })
    newticaret=count
    elelktronnct.innerHTML="₼"+count
    eticarets.innerHTML="₼"+count
    umuminiHesabla()
}
tcrtgo()

