const data =
{
        "costLogo": [
            {
                "id": 7,
                "name": "X\u00fcsusi",
                "price": 200,
                "type": "logo_design"
            },
            {
                "id": 15,
                "name": "Ehtiyac yoxdur",
                "price": 0,
                "type": "logo_design"
            },
            {
                "id": 20,
                "name": "Sad\u0259",
                "price": 100,
                "type": "logo_design"
            }
        ],
        "costAddon": [
            {
                "id": 1,
                "name": "Bloq",
                "price": 200,
                "type": "website_addons"
            },
            {
                "id": 2,
                "name": "\u00dczv giri\u015fi \/\u200d\u200d\u200d Profill\u0259r",
                "price": 400,
                "type": "website_addons"
            },
            {
                "id": 8,
                "name": "Responsive",
                "price": 100,
                "type": "website_addons"
            },
            {
                "id": 22,
                "name": "Forum",
                "price": 400,
                "type": "website_addons"
            },
            {
                "id": 23,
                "name": "Mesajla\u015fma",
                "price": 50,
                "type": "website_addons"
            },
            {
                "id": 24,
                "name": "Canl\u0131 S\u00f6hb\u0259t",
                "price": 50,
                "type": "website_addons"
            },
            {
                "id": 25,
                "name": "Qalereya",
                "price": 100,
                "type": "website_addons"
            },
            {
                "id": 26,
                "name": "\u018flaq\u0259 Formas\u0131",
                "price": 100,
                "type": "website_addons"
            },
            {
                "id": 27,
                "name": "Saytda Axtar\u0131\u015f",
                "price": 100,
                "type": "website_addons"
            },
            {
                "id": 28,
                "name": "X\u0259rit\u0259 M\u0259lumat\u0131 \/ Geolocation",
                "price": 100,
                "type": "website_addons"
            },
            {
                "id": 29,
                "name": "Rezervasyon",
                "price": 400,
                "type": "website_addons"
            },
            {
                "id": 30,
                "name": "Sosial Media inteqrasiyas\u0131",
                "price": 50,
                "type": "website_addons"
            },
            {
                "id": 31,
                "name": "Analitika \/ \u0130zl\u0259m\u0259",
                "price": 50,
                "type": "website_addons"
            },
            {
                "id": 36,
                "name": "Admin Panel",
                "price": 300,
                "type": "website_addons"
            }
        ],
        "costSeo": [
            {
                "id": 3,
                "name": "Ba\u015fl\u0131qlar &  Meta",
                "price": 200,
                "type": "seo_addons"
            },
            {
                "id": 32,
                "name": "A\u00e7ar s\u00f6z",
                "price": 300,
                "type": "seo_addons"
            },
            {
                "id": 33,
                "name": "+20 Qabaqc\u0131l Texnika",
                "price": 300,
                "type": "seo_addons"
            },
            {
                "id": 34,
                "name": "Ba\u015fl\u0131q Teql\u0259ri",
                "price": 100,
                "type": "seo_addons"
            },
            {
                "id": 35,
                "name": "Sitemap",
                "price": 100,
                "type": "seo_addons"
            }
        ],
        "costSetting": [
            {
                "id": 18,
                "name": "min",
                "price": 450,
                "type": "setting"
            },
            {
                "id": 19,
                "name": "page",
                "price": 20,
                "type": "setting"
            }
        ],
        "costEcommerce": [
            {
                "id": 38,
                "name": "\u00d6d\u0259ni\u015f",
                "price": 200,
                "type": "ecommerce"
            },
            {
                "id": 39,
                "name": "S\u0259b\u0259t",
                "price": 500,
                "type": "ecommerce"
            },
            {
                "id": 40,
                "name": "M\u0259hsullar",
                "price": 300,
                "type": "ecommerce"
            },
            {
                "id": 41,
                "name": "B\u0259y\u0259ndikl\u0259rim",
                "price": 300,
                "type": "ecommerce"
            },
            {
                "id": 42,
                "name": "Filtr",
                "price": 300,
                "type": "ecommerce"
            },
            {
                "id": 43,
                "name": "M\u0259hsul Haqq\u0131nda",
                "price": 200,
                "type": "ecommerce"
            }
        ]
    }
    


const elveler =document.getElementById('elveler')
const axtarismoto =document.getElementById('axtarismoto')
const eletronelave =document.getElementById('eletronelave')
const əlavələrntc=document.getElementById('əlavələrntc')
const axtarisntc=document.getElementById('axtarisntc')
const elelktronnct =document.getElementById("elelktronnct")
const logom=document.getElementById('logom')
function adelavle(){
    data.costAddon.map(item=>{
        elveler.innerHTML+=`<div class="flex justify-between items-center md:w-[48%] ">
                                        <span  class="text-[18px] font-semibold text-gray-900">${item.name}</span>
                                        <label  class="relative inline-block w-11 h-6">
                                            <input value="${item.price}" onclick="vebealve()"  type="checkbox"  name="${item.name}"
                                                class="sr-only peer" />
                                            <div
                                                class="w-full h-full bg-gray-200 peer peer-checked:bg-[#A271F2]  rounded-full peer peer-checked:bg-#A271F2 transition-colors duration-300">
                                            </div>
                                            <div
                                                class="absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform duration-300 transform peer-checked:translate-x-full">
                                            </div>
                                        </label>
                                    </div>`
    })
}adelavle()

function axtirsadd(){
    data.costSeo.map(item=>{
        axtarismoto.innerHTML+=` <div class="yoxlanis flex flex-row md:w-1/2 gap-5 ">
                                       <input onchange="axtarismotom()" type="checkbox"  value="${item.price}"
                        id="${item.name}" name="${item.name}" 
                                                class="transition-all duration-500 h-5 w-5">
                                            <label for="${item.name}" 
                                                class="text-[18px] font-semibold text-gray-700 cursor-pointer select-none">${item.name} </label>
                                    </div>
                                        `
    })
}
axtirsadd()

function elektronadd(){
    data.costEcommerce.map(item=>{
        eletronelave.innerHTML+=`<div class="flex justify-between items-center w-full">
                                            <span class="text-[18px] font-semibold text-gray-900">${item.name}</span>
                                            <label class="relative inline-block w-11 h-6">
                                                <input id="odenis" value="${item.price}" onchange="tcrtgo()" name=${item.name} type="checkbox"
                                                    class="peer sr-only" />
                                                <div
                                                    class="w-full peer peer-checked:bg-[#A271F2]  h-full bg-gray-200 rounded-full peer peer-checked:bg-#A271F2 transition-colors duration-300">
                                                </div>
                                                <div
                                                    class="absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform duration-300 transform peer-checked:translate-x-full">
                                                </div>
                                            </label>
                                        </div>`
    })
}
elektronadd()