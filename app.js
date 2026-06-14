let foundCaches =
JSON.parse(
localStorage.getItem("foundCaches")
) || {};

function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(x => x.classList.remove("active"));

  document
    .getElementById(id)
    .classList.add("active");

}
function startVictoryMessage(){

    const lines = [

        "...ale !",

        "Tu však naše dobrodružstvo nekončí.",

        "Posledná, bonusová keška ťa už čaká offline.",

        "Prvá indícia na teba čaká v Moschino kabelke.",

        "Veľa šťastia."

    ];

    const box =
        document.getElementById(
            "victory-message"
        );

    box.innerHTML = "";

    let currentLine = 0;

    function typeLine(){

        if(currentLine >= lines.length){
            return;
        }

        const line = lines[currentLine];

        let i = 0;

        const lineDiv =
            document.createElement("div");

        lineDiv.style.marginBottom = "20px";

        box.appendChild(lineDiv);

        const typing =
            setInterval(() => {

                lineDiv.innerHTML += line[i];

                i++;

                if(i >= line.length){

                    clearInterval(typing);

                    currentLine++;

                    setTimeout(
                        typeLine,
                        1000
                    );

                }

            }, 40);

    }

    typeLine();

}
function openCache(cacheId){

    const cacheScreen =
        document.getElementById("cache");

    const cacheContent =
        document.getElementById("cache-content");

    if(cacheId === "smilstvo"){

        cacheContent.innerHTML = `
            <button
                class="btn"
                onclick="showScreen('spalna')">
                ← Späť
            </button>

            <div class="cache-card">

<h2 class="cache-title">
    7 Smrteľných hriechov - Smilstvo
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:2 | T:1
    </div>

</div>	
           <div class="cache-description">
                Sedem hlavných (alebo smrteľných) hriechov tvorí tradičný zoznam nerestí v kresťanskej náuke, ktorý definoval pápež Gregor I. v 6. storočí. Tieto hriechy sú považované za korene všetkých ostatných morálnych zlyhaní.
<br><br>
Smilstvo (Luxuria): Prehnané telesné žiadostivosti a nezodpovedné sexuálne správanie.
            </div>

            <button
                class="btn"
                onclick="toggleHint('hint-smilstvo')">
                Nápoveda
            </button>

            <div
                id="hint-smilstvo"
                class="hint">
                Vrrrrrrrrrrn
            </div>

            <br><br>

${
  foundCaches.smilstvo
  ?
  `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
  :
  `<button
      class="btn"
      onclick="logCache('smilstvo')">
      Zalogovať nález
   </button>`
}

        `;
    }
if(cacheId === "yucca"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('spalna')">
            ← Späť
        </button>

        <div class="cache-card">

<h2 class="cache-title">
    Botanicals #01 - Yucca Elephantipes
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:1,5 | T:2
    </div>

</div>	

        <div class="cache-description">
         Yucca je rod trvalých rastlín z čeľade Asparagaceae, ktorý zahŕňa približne 40-50 druhov. Pochádza z teplých a suchých oblastí Severnej a Strednej Ameriky. Yucca je známa pre svoje dlhé, ostré a tuhými listy, ktoré vyrastajú v rozete. Niektoré druhy Yuccy majú drevnatý kmeň, ktorý s pribúdajúcim vekom rastliny rastie a dáva jej vzhľad malého stromu. Yucca je veľmi odolná rastlina, ktorá sa dokáže prispôsobiť rôznym podmienkam, čo ju robí populárnou izbovou rastlinou aj záhradnou rastlinou.
<br><br>
Yucca je krásna a mimoriadne odolná rastlina, ktorá dokáže pridať exotický nádych do akéhokoľvek interiéru alebo záhrady. So správnou starostlivosťou bude táto rastlina prosperovať a tešiť vás svojím jedinečným vzhľadom po mnoho rokov.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-yucca')">
            Nápoveda
        </button>

        <div
            id="hint-yucca"
            class="hint">
            Pod zemou
        </div>
        <br><br>

${
  foundCaches.yucca
  ?
  `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
  :
  `<button
      class="btn"
      onclick="logCache('yucca')">
      Zalogovať nález
   </button>`
}

    `;
}
if(cacheId === "pig"){

cacheContent.innerHTML = `
    <button
        class="btn"
        onclick="showScreen('spalna')">
        ← Späť
    </button>

    <div class="cache-card">

<h2 class="cache-title">
    Pink Pig Mystery
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-mystery">
        Mystery
    </div>

    <div class="cache-badge badge-dt">
        D:2,5 | T:2
    </div>

</div>
    
    <div class="cache-description">
    Tomáš si šetril peniaze v prasiatku.
<br>
Na začiatku mal neznámu sumu peňazí.
<br><br>
Na Mikuláša dostal 20 €, potom si kúpil knihu za 12 €.
<br><br>
O týždeň neskôr si do prasiatka pridal ešte 15 € z brigády.
<br><br>
Následne minul 18 € na darček pre kamaráta.
<br><br>
Keď prasiatko otvoril, našiel v ňom 65 €.
<br><br>
Koľko eur mal Tomáš na začiatku?
<br><br>
<br><br>
… a možno by po zalogovaní nebol zlý nápad sa do prasiatka aj pozrieť 😊
    </div>
    
    <input
        id="pig-answer"
        type="number"
        placeholder="Koľko eur mal Tomáš?">

    <br><br>

    ${
      foundCaches.pig
      ?
      `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
      :
      `<button
          class="btn"
          onclick="checkPig()">
          Overiť odpoveď
       </button>`
    }

`;

}
if(cacheId === "lenivost"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('obyvacka')">
            ← Späť
        </button>

       <div class="cache-card">

<h2 class="cache-title">
    7 smrteľných hriechov - lenivosť
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:2 | T:2
    </div>

</div>	

        <div class="cache-description">
           Sedem hlavných (alebo smrteľných) hriechov tvorí tradičný zoznam nerestí v kresťanskej náuke, ktorý definoval pápež Gregor I. v 6. storočí. Tieto hriechy sú považované za korene všetkých ostatných morálnych zlyhaní.
<br><br>
Lenivosť (lat. acedia): Duchovná otupenosť, ľahostajnosť a odpor k duchovnému úsiliu.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-lenivost')">
            Nápoveda
        </button>

        <div
            id="hint-lenivost"
            class="hint">
            Šmátraj
        </div>

        <br><br>

        ${
          foundCaches.lenivost
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('lenivost')">
              Zalogovať nález
           </button>`
        }

    `;
}
if(cacheId === "london"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('obyvacka')">
            ← Späť
        </button>

      <div class="cache-card">

<h2 class="cache-title">
    Londýn - New York - Krabi a späť
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-multi">
        Multina
    </div>

    <div class="cache-badge badge-dt">
        D:4,5 | T:3
    </div>

</div>

        <div class="cache-description">
         Táto multina ťa zoberie na krátku cestu okolo sveta. A bytu. 
         <br><br>
         Na štyroch stagoch nájdeš 4 číslice, ktoré ti pomôžu nájsť riešenie úlohy.
         <br><br>

X = (A + B)² + C × D² × (A + C)
<br><br>
K finálu: som miestnosť v tvojom byte, ale vkročiť do mňa nemôžeš.
<br><br>
Upozornenie: na fináli opatrne, aby sme o kešku neprišli !!!
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-london')">
            Nápoveda
        </button>

        <div
            id="hint-london"
            class="hint">
            Magnet
        </div>

        <br><br>

        ${
          foundCaches.london
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('london')">
              Zalogovať nález
           </button>`
        }

    `;
}
if(cacheId === "strelitzia"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('obyvacka')">
            ← Späť
        </button>

     <div class="cache-card">

<h2 class="cache-title">
    Botanicals #02 - Strelitzia Nicolai
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:2 | T:2
    </div>

</div>	

        <div class="cache-description">
            Strelitzia Nicolai, známa tiež ako „biela strelícia“, patrí medzi najimpozantnejšie izbové rastliny. Je obľúbená vďaka svojim veľkým listom a exotickému vzhľadu, ktorý každému interiéru dodáva nádych tropického raja.
<br><br>
Strelitzia Nicolai pochádza z južnej Afriky a vo voľnej prírode dorastá až do výšky 10 metrov. V interiéri je jej rast o niečo obmedzenejší, ale pri optimálnych podmienkach môže dosiahnuť výšku okolo 2 až 3 metrov. Táto rastlina sa pýši veľkými, banánovníkom podobnými listami, ktoré sa často trhajú kvôli svojej veľkosti a štruktúre. Aj keď to môže pôsobiť ako poškodenie, je to prirodzený proces, ktorý umožňuje listom lepšie sa prispôsobiť prúdeniu vzduchu v prírode.
<br><br>
Strelitzia Nicolai je skutočným klenotom medzi izbovými rastlinami, ktorý sa postará o unikátnu atmosféru vašej domácnosti. Hoci si vyžaduje starostlivosť, pri dodržaní základných pravidiel sa vám odvďačí krásnym rastom a výnimočnou estetikou. S trochou trpezlivosti a správnymi podmienkami sa môže stať stálicou vo vašej zelenej zbierke.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-strelitzia')">
            Nápoveda
        </button>

        <div
            id="hint-strelitzia"
            class="hint">
            Visí
        </div>

        <br><br>

        ${
          foundCaches.strelitzia
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('strelitzia')">
              Zalogovať nález
           </button>`
        }

    `;
}
if(cacheId === "knihomol"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('obyvacka')">
            ← Späť
        </button>

     <div class="cache-card">

<h2 class="cache-title">
    Knihomoľ - varenie
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-mystery">
        Mystery
    </div>

    <div class="cache-badge badge-dt">
        D:3 | T:1,5
    </div>

</div>
     
          <div class="cache-description">
            V našej domácnosti sa nachádza niekoľko
            kuchárskych kníh.

            Pomocou nich vyrieš úlohy
            a dopracuj sa k výslednému riešeniu.
<br>
<br>
A = počet strúčikov cesnaku potrebných na prípravu kreviet s cesnakom a čerstvými cestovinami
<br>
B = ako dlho sa na panvici smažia rezne?
<br>
C = počet jedál z regiónu Liptov 
<br>
D = množstvo sacharidov v šaláte z restovaných paprík
<br>
<br>
X = DBAC
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-knihomol')">
            Nápoveda
        </button>

        <div
            id="hint-knihomol"
            class="hint">
            Pohlreich - Princíp varenia - Sulík/Ihnačák - 1000 klasických receptov
        </div>

        <br><br>

        ${
  foundCaches.knihomol
  ?
  `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
  :
  `
    <input
        id="knihomol-answer"
        type="number"
        placeholder="Výsledný kód">

    <br><br>

    <button
        class="btn"
        onclick="checkKnihomol()">
        Overiť odpoveď
    </button>
  `
}

    `;
}
if(cacheId === "pizza"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('kuchyna')">
            ← Späť
        </button>

        <div class="cache-card">

<h2 class="cache-title">
    🍕 Pizza Time!
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:2 | T:1
    </div>

</div>

        <div class="cache-description">
       Rímska? Neapolská? New York style? Chicago deep dish?
       <br><br>
 To je jedno, každá je skvelá !
<br><br>
Pizza prešla dlhú cestu od antických chlebov chudobných v Stredomorí po celosvetový fenomén. Moderná pizza s paradajkami a syrom sa zrodila v 18. storočí v Neapole. Dnes patrí medzi najobľúbenejšie jedlá sveta s nespočetnými lokálnymi obmenami.
<br><br>
Od antiky po Neapol
Predchodcovia pizze s rôznymi polevami sa piekli už v starom Egypte, Grécku a Ríme. Boli to lacné a sýte placky, ktoré slúžili aj ako jedlý tanier. Samotné slovo „pizza“ bolo prvýkrát písomne zaznamenané už v roku 997 v meste Gaeta.
Skutočná revolúcia nastala v 16. storočí v Neapole. Po dovoze paradajok z Ameriky ich začali chudobní obyvatelia (známi ako lazzaroni) pridávať na svoje cestové placky. Tak vzniklo jedlo, ktoré bolo lacné, rýchle a prenosné. V roku 1830 bola v Neapole otvorená prvá moderná pizzeria na svete – Port'Alba.
<br><br>
Zrod pizze Margherita
Prelom v histórii nastal v roku 1889, keď Neapol navštívili taliansky kráľ Umberto I. s manželkou Margaritou Savojskou. Miestny majster pizze Raffaele Esposito im na privítanie pripravil tri rôzne pizze. Kráľovnú najviac očarila verzia s paradajkami, mozzarellou a bazalkou, ktoré symbolizovali farby talianskej vlajky (červená, biela, zelená). Na jej počesť dostala táto dodnes najznámejšia pizza názov Margherita.
<br><br>
Cesta do sveta
Do Spojených štátov amerických priniesli pizzu talianski imigranti na konci 19. a začiatkom 20. storočia. Prvá americká pizzeria bola otvorená v New Yorku v roku 1905. Celosvetový boom však zažila až po druhej svetovej vojne. Dnes sa pôvodná talianska receptúra teší takej ochrane, že spôsob prípravy tradičnej neapolskej pizze je dokonca zapísaný v zozname nehmotného kultúrneho dedičstva UNESCO.

        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-pizza')">
            Nápoveda
        </button>

        <div
            id="hint-pizza"
            class="hint">
            Urob si pizzu
        </div>

        <br><br>

        ${
          foundCaches.pizza
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('pizza')">
              Zalogovať nález
           </button>`
        }
</div>
    `;
}
if(cacheId === "obzerstvo"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('kuchyna')">
            ← Späť
        </button>

        <div class="cache-card">

<h2 class="cache-title">
    7 smrteľných hriechov - obžerstvo
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:2 | T:1
    </div>

</div>
        <div class="cache-description">
        Sedem hlavných (alebo smrteľných) hriechov tvorí tradičný zoznam nerestí v kresťanskej náuke, ktorý definoval pápež Gregor I. v 6. storočí. Tieto hriechy sú považované za korene všetkých ostatných morálnych zlyhaní.
<br><br>
Obžerstvo (lat. gula): Prehnané a sebecké prejedanie sa či nestriedmosť v pití.

        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-obzerstvo')">
            Nápoveda
        </button>

        <div
            id="hint-obzerstvo"
            class="hint">
           Zospodu
        </div>

        <br><br>

        ${
          foundCaches.obzerstvo
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('obzerstvo')">
              Zalogovať nález
           </button>`
        }

    `;
}
if(cacheId === "epipremnum"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('kuchyna')">
            ← Späť
        </button>

       <div class="cache-card">

<h2 class="cache-title">
    Botanicals #03 - Epipremnum
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-mystery">
        Mystery
    </div>

    <div class="cache-badge badge-dt">
        D:3 | T:1,5
    </div>

</div>

        <div class="cache-description">
           Epipremnum či Pothos, ľudovo zvaný aj Divý Janko, je obľúbená ťahavá rastlinka, ktorá už dlhé roky zdobí mnohé poličky a skrine v domácnostiach aj kanceláriách. Obľúbenou sa stala najmä kvôli nízkym nárokom na svetlo a zalievanie. Výskum NASA ju dokonca zaradil medzi rastliny s najlepšou schopnosťou čistiť zo vzduchu toxíny. Rastie relatívne rýchlo a teda je vhodná napríklad pre pestovateľov začiatočníkov, ktorí chcú postupne zazelenať svoj byt. 
<br><br>
Epipremnum je ťahavá alebo plazivá rastlina. Patrí do čeľade áronovité, po latinsky Araceae. V prírode sa pomocou vzdušných koreňov zachytáva na vyššie stromy a šplhá sa po nich smerom nahor.
V domácich podmienkach sa môžete rozhodnúť ci ho umiestnite na poličku a necháte spustený visieť smerom nadol, alebo mu môžete do kvetináča umiestniť podpornú tyč, po ktorej sa môže ťahať smerom nahor.
<br><br>
Listy majú zväčša tvar natiahnutého srdca. Najčastejšie sú zelenej farby v kombinácii so žltými či bielymi fľakmi. Najrozšírenejším druhom je takzvaný Golden Pothos, latinsky Epipremnum aureum, ktorý má zelené listy so žltými fľakmi. Prvý raz bol pomenovaný koncom 18. storočia a doteraz je najrozšírenejším druhom ťahavej izbovej rastliny vďaka ľahkému množeniu.
<br><br>
Ďalšími obľúbenými druhmi sú Pothos Marble Queen, ktorý mu je podobný, avšak jeho fľaky nie sú žlté, ale biele, Neon pothos s výraznými listami, Pothos variegata / Pothos N´Joy s menšími bielo-zelenými listami, Pothos Happy Leaf, ktorý má na bielych listoch nepravidelné zelené škvrny rôznej sýtosti.
<br><br>
Pothosy sa môžu dorastať až do dĺžky 20 metrov. V domácich podmienkach mávajú väčšinou okolo jedného či dvoch metrov. Ak sú dlhšie tak ich potom ľudia nastrihajú, zakorenia a zasadia opäť do kvetináča aby zahustili rastlinku. Listy sa môžu dorásť do veľkosti 100 na 45 centimetrov. Bežne v domácnosti však mávajú len veľkosť do 20 centimetrov.
<br><br>
Ku keške: vynásob počet stoniek viditeľne vyrastajúcich z kvetináča počtom živých listov ťahajúcich sa popri kuchynskej skrinke.

        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-epipremnum')">
            Nápoveda
        </button>

        <div
            id="hint-epipremnum"
            class="hint">
            -
        </div>

        <br><br>

        ${
          foundCaches.epipremnum
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `
            <input
                id="epipremnum-answer"
                type="number"
                placeholder="Výsledný kód">

            <br><br>

            <button
                class="btn"
                onclick="checkEpipremnum()">
                Overiť odpoveď
            </button>
          `
        }

    `;
}  
if(cacheId === "zima"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('kuchyna')">
            ← Späť
        </button>

       <div class="cache-card">

<h2 class="cache-title">
    Zima, teplo, teplejšie, horí!
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-mystery">
        Mystery
    </div>

    <div class="cache-badge badge-dt">
        D:4 | T:1,5
    </div>

</div>

        <div class="cache-description">
            V našom byte sa nachádza viacero elektrospotrebičov ktorých primárnym účelom je hriať, alebo chladiť. Zrátaj “chladiče” a “hrejiče”, vynásob ich počet a dopracuješ sa k riešeniu.
<br><br>
Poznámka: hľadaj iba v kuchyni a obývačke. Pozeraj sa pozorne.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-zima')">
            Nápoveda
        </button>

        <div
            id="hint-zima"
            class="hint">
            -
        </div>

        <br><br>

        ${
          foundCaches.zima
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `
            <input
                id="zima-answer"
                type="number"
                placeholder="Výsledný kód">

            <br><br>

            <button
                class="btn"
                onclick="checkZima()">
                Overiť odpoveď
            </button>
          `
        }

    `;
}
if(cacheId === "dobdob"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('lodzia')">
            ← Späť
        </button>

       <div class="cache-card">

<h2 class="cache-title">
    🐦 ĎOB-ĎOB
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:2 | T:1
    </div>

</div>	

        <div class="cache-description">
            Však ty vieš...
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-dobdob')">
            Nápoveda
        </button>

        <div
            id="hint-dobdob"
            class="hint">
            -
        </div>

        <br><br>

        ${
          foundCaches.dobdob
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('dobdob')">
              Zalogovať nález
           </button>`
        }

    `;
}
if(cacheId === "vyhladova"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('lodzia')">
            ← Späť
        </button>

        <div class="cache-card">

<h2 class="cache-title">
    Výhľadová
</h2>

<div class="cache-badges">

    <div class="cache-badge badge-traditional">
        Tradičná
    </div>

    <div class="cache-badge badge-dt">
        D:1,5 | T:1
    </div>

</div>	

        <div class="cache-description">
           Pokochaj sa výhľadom, nadýchaj sa čerstvého vzduchu, užívaj si prítomný moment.
           <br><br>
           A možno pri tom objavíš aj kešku.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-vyhladova')">
            Nápoveda
        </button>

        <div
            id="hint-vyhladova"
            class="hint">
            Hedera Helix
        </div>

        <br><br>

        ${
          foundCaches.vyhladova
          ?
          `<div class="found-box">
    ✅ Keška už bola nájdená
</div>`
          :
          `<button
              class="btn"
              onclick="logCache('vyhladova')">
              Zalogovať nález
           </button>`
        }

    `;
}
  showScreen("cache");
}
function toggleHint(id){

const hint =
    document.getElementById(id);

if(hint.style.display === "block"){
    hint.style.display = "none";
}else{
    hint.style.display = "block";
}

}
function logCache(cacheId){

foundCaches[cacheId] = true;

localStorage.setItem(
    "foundCaches",
    JSON.stringify(foundCaches)
);

updateProgress();

updateProgress();

alert(
    "😊 Keška bola úspešne zalogovaná."
);

if(

    foundCaches.smilstvo &&
    foundCaches.yucca &&
    foundCaches.pig &&

    foundCaches.lenivost &&
    foundCaches.london &&
    foundCaches.strelitzia &&
    foundCaches.knihomol &&

    foundCaches.pizza &&
    foundCaches.obzerstvo &&
    foundCaches.epipremnum &&
    foundCaches.zima &&

    foundCaches.dobdob &&
    foundCaches.vyhladova

){

    showScreen("victory");

setTimeout(() => {

    startVictoryMessage();

}, 2000);

}else{

    showScreen("home");

}

}
function updateProgress(){

const smilstvoPin =
document.getElementById("pin-smilstvo");

if(smilstvoPin){

    smilstvoPin.innerHTML =
    foundCaches.smilstvo
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';
}
const yuccaPin =
document.getElementById("pin-yucca");

if(yuccaPin){

    yuccaPin.innerHTML =
    foundCaches.yucca
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
const pigPin =
document.getElementById("pin-pig");

if(pigPin){

    pigPin.innerHTML =
    foundCaches.pig
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-mystery" src="mystery.png">';

}
const lenivostPin =
document.getElementById("pin-lenivost");

if(lenivostPin){

    lenivostPin.innerHTML =
    foundCaches.lenivost
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
const londonPin =
document.getElementById("pin-london");

if(londonPin){

    londonPin.innerHTML =
    foundCaches.london
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-multi" src="multi.png">';

}
const strelitziaPin =
document.getElementById("pin-strelitzia");

if(strelitziaPin){

    strelitziaPin.innerHTML =
    foundCaches.strelitzia
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
const knihomolPin =
document.getElementById("pin-knihomol");

if(knihomolPin){

    knihomolPin.innerHTML =
    foundCaches.knihomol
       ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-mystery" src="mystery.png">';

}

const pizzaPin =
document.getElementById("pin-pizza");

  if(pizzaPin){

    pizzaPin.innerHTML =
    foundCaches.pizza
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
const obzerstvoPin =
document.getElementById("pin-obzerstvo");

if(obzerstvoPin){

    obzerstvoPin.innerHTML =
    foundCaches.obzerstvo
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
const epipremnumPin =
document.getElementById(
    "pin-epipremnum"
);

if(epipremnumPin){

    epipremnumPin.innerHTML =
    foundCaches.epipremnum
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-mystery" src="mystery.png">';
  
}
const zimaPin =
document.getElementById(
    "pin-zima"
);

if(zimaPin){

    zimaPin.innerHTML =
    foundCaches.zima
      ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-mystery" src="mystery.png">';

}
const dobdobPin =
document.getElementById("pin-dobdob");

if(dobdobPin){

    dobdobPin.innerHTML =
    foundCaches.dobdob
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
  const vyhladovaPin =
document.getElementById(
    "pin-vyhladova"
);

if(vyhladovaPin){

    vyhladovaPin.innerHTML =
    foundCaches.vyhladova
        ? '<img class="pin-found" src="found.png">'
        : '<img class="pin-traditional" src="traditional.png">';

}
let count = 0;

if(foundCaches.smilstvo) count++;
if(foundCaches.yucca) count++;
if(foundCaches.pig) count++;
if(foundCaches.lenivost) count++;
if(foundCaches.london) count++;
if(foundCaches.strelitzia) count++;
if(foundCaches.knihomol) count++;
if(foundCaches.pizza) count++;
if(foundCaches.obzerstvo) count++;
if(foundCaches.epipremnum) count++;
if(foundCaches.zima) count++;
if(foundCaches.dobdob) count++;
if(foundCaches.vyhladova) count++;
  
const livingRoomCard =
document.getElementById(
"living-room-card"
);

const livingRoomText =
document.getElementById(
"living-room-text"
);

if(count >= 3){

  const livingRoomIcons =
document.getElementById(
    "living-room-icons"
);

if(livingRoomIcons){

    livingRoomIcons.style.display =
        "block";

}
const livingRoomTitle =
document.getElementById(
    "living-room-title"
);

if(livingRoomTitle){

    livingRoomTitle.innerText =
        "OBÝVAČKA";

}

if(livingRoomCard){

    livingRoomCard
        .classList
        .remove("locked");

    livingRoomCard
        .classList
        .add("unlocked");

}

if(livingRoomText){

    livingRoomText.innerText =
        "";

}
const livingRoomButton =
document.getElementById(
    "living-room-button"
);

if(livingRoomButton){

    livingRoomButton.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('obyvacka')">
            Vstúpiť
        </button>
    `;

}
}

const progress =
    document.getElementById(
        "progress-text"
    );

if(progress){

    progress.innerText =
        "🟢 " + count + " / 13 kešiek";

}

const icons =
    document.getElementById(
        "spalna-icons"
    );

if(icons){

    icons.innerHTML = `
        <div class="card-icons">

            <img src="${
                foundCaches.smilstvo
                ? "found.png"
                : "traditional.png"
            }">

            <img src="${
                foundCaches.yucca
                ? "found.png"
                : "traditional.png"
            }">

            <img src="${
                foundCaches.pig
                ? "found.png"
                : "mystery.png"
            }">

        </div>
    `;

}
const livingIcons =
document.getElementById(
    "living-room-icons"
);

if(livingIcons){

    if(count >= 3){

        livingIcons.innerHTML = `
<div class="card-icons">

    <img src="${
        foundCaches.lenivost
        ? "found.png"
        : "traditional.png"
    }">

    <img src="${
        foundCaches.london
        ? "found.png"
        : "multi.png"
    }">

    <img src="${
        foundCaches.strelitzia
        ? "found.png"
        : "traditional.png"
    }">

    <img src="${
        foundCaches.knihomol
        ? "found.png"
        : "mystery.png"
    }">

</div>
`;
    }else{

        livingIcons.innerHTML = "";

    }

}
const kitchenCard =
document.getElementById(
    "kitchen-card"
);

const kitchenTitle =
document.getElementById(
    "kitchen-title"
);

const kitchenText =
document.getElementById(
    "kitchen-text"
);

const kitchenButton =
document.getElementById(
    "kitchen-button"
);

const kitchenIcons =
document.getElementById(
    "kitchen-icons"
);

if(
    foundCaches.lenivost &&
    foundCaches.london &&
    foundCaches.strelitzia &&
    foundCaches.knihomol
){

    if(kitchenCard){

        kitchenCard
            .classList
            .remove("locked");

        kitchenCard.classList.add("unlocked");
    }

    if(kitchenTitle){

        kitchenTitle.innerText =
            "KUCHYŇA";

    }

    if(kitchenText){

        kitchenText.innerText =
            "";

    }

    if(kitchenIcons){

   kitchenIcons.innerHTML = `
<div class="card-icons">

    <img src="${
        foundCaches.pizza
        ? "found.png"
        : "traditional.png"
    }">

    <img src="${
        foundCaches.obzerstvo
        ? "found.png"
        : "traditional.png"
    }">

    <img src="${
        foundCaches.epipremnum
        ? "found.png"
        : "mystery.png"
    }">

    <img src="${
        foundCaches.zima
        ? "found.png"
        : "mystery.png"
    }">

</div>
`;
}
    if(kitchenButton){

        kitchenButton.innerHTML = `
            <button
                class="btn"
                onclick="showScreen('kuchyna')">
                Vstúpiť
            </button>
        `;

    }

}
const balconyCard =
document.getElementById(
    "balcony-card"
);

const balconyTitle =
document.getElementById(
    "balcony-title"
);

const balconyText =
document.getElementById(
    "balcony-text"
);

const balconyButton =
document.getElementById(
    "balcony-button"
);

const balconyIcons =
document.getElementById(
    "balcony-icons"
);

if(
    foundCaches.pizza &&
    foundCaches.obzerstvo &&
    foundCaches.epipremnum &&
    foundCaches.zima
){

    if(balconyCard){

        balconyCard
            .classList
            .remove("locked");

      balconyCard.classList.add("unlocked");

    }

    if(balconyTitle){

        balconyTitle.innerText =
            "LODŽIA";

    }

    if(balconyText){

        balconyText.innerText =
            "";

    }

 if(balconyIcons){

   balconyIcons.innerHTML = `
<div class="card-icons">

    <img src="${
        foundCaches.dobdob
        ? "found.png"
        : "traditional.png"
    }">

    <img src="${
        foundCaches.vyhladova
        ? "found.png"
        : "traditional.png"
    }">

</div>
`;
}
    if(balconyButton){

        balconyButton.innerHTML = `
            <button
                class="btn"
                onclick="showScreen('lodzia')">
                Vstúpiť
            </button>
        `;

    }

}
}

function checkPig(){

    const answer =
        document.getElementById("pig-answer").value;

    if(answer == "60"){

        logCache("pig");


    }else{

        alert(
            "❌ Nesprávna odpoveď"
        );

    }

}
function checkKnihomol(){

    const answer =
        document.getElementById(
            "knihomol-answer"
        ).value;

    if(answer == "9624"){

        logCache(
            "knihomol"
        );

    }else{

        alert(
            "❌ Nesprávny kód"
        );

    }

}
function checkEpipremnum(){

    const answer =
        document.getElementById(
            "epipremnum-answer"
        ).value;

    if(answer == "56"){

        logCache(
            "epipremnum"
        );

    }else{

        alert(
            "❌ Nesprávny kód"
        );

    }

}
function checkZima(){

    const answer =
        document.getElementById(
            "zima-answer"
        ).value;

    if(answer == "36"){

        logCache(
            "zima"
        );

    }else{

        alert(
            "❌ Nesprávny kód"
        );

    }

}
updateProgress();

function resetProgress(){

    const confirmed =
        confirm(
            "Týmto vyresetuješ svoj postup v hre.\n\nChceš pokračovať?"
        );

    if(!confirmed){

        return;

    }

    localStorage.removeItem(
        "foundCaches"
    );

    location.reload();

}
const carousel =
document.querySelector(".carousel");

const cards =
document.querySelectorAll(".card");

const dots =
document.querySelectorAll(".carousel-dot");

if(carousel){

    carousel.addEventListener(
        "scroll",
        updateCarouselState
    );

    updateCarouselState();

}
function updateCarouselState(){

    const carousel =
        document.querySelector(".carousel");

    const center =
        carousel.scrollLeft +
        carousel.offsetWidth / 2;

    let activeIndex = 0;

    let closestDistance =
        Infinity;

    cards.forEach(
        (card,index) => {

        const cardCenter =
            card.offsetLeft +
            card.offsetWidth / 2;

        const distance =
            Math.abs(
                center - cardCenter
            );

        if(
            distance <
            closestDistance
        ){

            closestDistance =
                distance;

            activeIndex =
                index;

        }

    });

    cards.forEach(card =>
        card.classList.remove(
            "active-card"
        )
    );

    dots.forEach(dot =>
        dot.classList.remove(
            "active-dot"
        )
    );

    cards[activeIndex]
        .classList.add(
            "active-card"
        );

    dots[activeIndex]
        .classList.add(
            "active-dot"
        );

}
