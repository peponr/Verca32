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

            <h2>
                7 smrteľných hriechov - smilstvo
            </h2>

            <p>
                Typ: Tradičná
            </p>

            <p>
                D: 2 | T: 1
            </p>

           <div class="cache-description">
                Sedem hlavných hriechov tvorí tradičný zoznam nerestí...
            </div>

            <button
                class="btn"
                onclick="toggleHint('hint-smilstvo')">
                Nápoveda
            </button>

            <div
                id="hint-smilstvo"
                class="hint">
                vnútri
            </div>

            <br><br>

${
  foundCaches.smilstvo
  ?
  `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Botanicals #01 - Yucca Elephantipes
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 2 | T: 2
        </p>

        <div class="cache-description">
            Yucca je rod trvalých rastlín z čeľade
            Asparagaceae...
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-yucca')">
            Nápoveda
        </button>

        <div
            id="hint-yucca"
            class="hint">
            pod zemou
        </div>
        <br><br>

${
  foundCaches.yucca
  ?
  `<p>😊 Keška už bola nájdená.</p>`
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

    <h2>
        Pink Pig Mystery
    </h2>

    <p>
        Typ: Mystery
    </p>

    <p>
        D: 2.5 | T: 2
    </p>
    
    <div class="cache-description">
    smerdzi mi cikulka
    </div>
    
    <input
        id="pig-answer"
        type="number"
        placeholder="Koľko eur mal Tomáš?">

    <br><br>

    ${
      foundCaches.pig
      ?
      `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            7 smrteľných hriechov - lenivosť
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 2 | T: 2
        </p>

        <div class="cache-description">
            Lenivosť (Acedia):
            Neochota konať dobro,
            pracovať alebo plniť svoje povinnosti.
            Lorem ipsum

            Dolor sit amet
            Blabla
            AKOKOKOKO
            Dlhyyyyyyyyyyyyy
            text
            skuska s

            Lenivosť (Acedia):
            Neochota konať dobro,
            pracovať alebo plniť svoje povinnosti.
            Lorem ipsum

            Dolor sit amet
            Blabla
            AKOKOKOKO
            Dlhyyyyyyyyyyyyy
            text
            skuska s
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-lenivost')">
            Nápoveda
        </button>

        <div
            id="hint-lenivost"
            class="hint">
            sem doplníme tvoj hint
        </div>

        <br><br>

        ${
          foundCaches.lenivost
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Londýn - New York - Krabi a späť
        </h2>

        <p>
            Typ: Multina
        </p>

        <p>
            D: 4.5 | T: 3
        </p>

        <div class="cache-description">
            Táto multina ťa zoberie na krátku cestu okolo sveta.
            A bytu.

            Na štyroch stagoch nájdeš 4 číslice,
            ktoré ti pomôžu nájsť riešenie úlohy.

            K finálu:
            Som miestnosť v tvojom byte,
            ale vkročiť do mňa nemôžeš.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-london')">
            Nápoveda
        </button>

        <div
            id="hint-london"
            class="hint">
            magnet
        </div>

        <br><br>

        ${
          foundCaches.london
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Botanicals #02 - Strelitzia Nicolai
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 2 | T: 2
        </p>

        <div class="cache-description">
            Strelitzia Nicolai, známa aj ako biela strelícia,
            patrí medzi najimpozantnejšie izbové rastliny.
            Je obľúbená vďaka svojim veľkým listom a exotickému vzhľadu.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-strelitzia')">
            Nápoveda
        </button>

        <div
            id="hint-strelitzia"
            class="hint">
            visí
        </div>

        <br><br>

        ${
          foundCaches.strelitzia
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Knihomoľ - varenie
        </h2>

        <p>
            Typ: Mystery
        </p>

        <p>
            D: 3 | T: 1.5
        </p>
     
          <div class="cache-description">
            V našej domácnosti sa nachádza niekoľko
            kuchárskych kníh.

            Pomocou nich vyrieš úlohy
            a dopracuj sa k výslednému riešeniu.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-knihomol')">
            Nápoveda
        </button>

        <div
            id="hint-knihomol"
            class="hint">
            Pohlreich, Ramsay, 1001 receptov
        </div>

        <br><br>

        ${
  foundCaches.knihomol
  ?
  `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Pizza Time!
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 2 | T: 1
        </p>

        <div class="cache-description">
            Pizza patrí medzi najobľúbenejšie jedlá
            na svete.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-pizza')">
            Nápoveda
        </button>

        <div
            id="hint-pizza"
            class="hint">
            mrazená
        </div>

        <br><br>

        ${
          foundCaches.pizza
          ?
          `<p>😊 Keška už bola nájdená.</p>`
          :
          `<button
              class="btn"
              onclick="logCache('pizza')">
              Zalogovať nález
           </button>`
        }

    `;
}
if(cacheId === "obzerstvo"){

    cacheContent.innerHTML = `
        <button
            class="btn"
            onclick="showScreen('kuchyna')">
            ← Späť
        </button>

        <h2>
            7 smrteľných hriechov - obžerstvo
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 2 | T: 1
        </p>

        <div class="cache-description">
            Obžerstvo predstavuje
            nadmerné užívanie jedla a nápojov.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-obzerstvo')">
            Nápoveda
        </button>

        <div
            id="hint-obzerstvo"
            class="hint">
            sem doplníme hint
        </div>

        <br><br>

        ${
          foundCaches.obzerstvo
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Botanicals #03 - Epipremnum
        </h2>

        <p>
            Typ: Mystery
        </p>

        <p>
            D: 3 | T: 1.5
        </p>

        <div class="cache-description">
            Epipremnum patrí medzi najobľúbenejšie
            izbové rastliny. Pre vyriešenie tejto
            mystery budeš musieť preskúmať jej okolie.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-epipremnum')">
            Nápoveda
        </button>

        <div
            id="hint-epipremnum"
            class="hint">
            zelená
        </div>

        <br><br>

        ${
          foundCaches.epipremnum
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Zima, teplo, teplejšie, horí!
        </h2>

        <p>
            Typ: Mystery
        </p>

        <p>
            D: 3 | T: 1.5
        </p>

        <div class="cache-description">
            Nájdi správne riešenie
            a získaj finálny kód.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-zima')">
            Nápoveda
        </button>

        <div
            id="hint-zima"
            class="hint">
            chladnička
        </div>

        <br><br>

        ${
          foundCaches.zima
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            ĎOB-ĎOB
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 2 | T: 1
        </p>

        <div class="cache-description">
            Táto keška sa nachádza na lodžii.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-dobdob')">
            Nápoveda
        </button>

        <div
            id="hint-dobdob"
            class="hint">
            sem doplníme hint
        </div>

        <br><br>

        ${
          foundCaches.dobdob
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

        <h2>
            Výhľadová
        </h2>

        <p>
            Typ: Tradičná
        </p>

        <p>
            D: 1.5 | T: 1
        </p>

        <div class="cache-description">
            Niekedy netreba hľadať pod nohami.
            Stačí sa rozhliadnuť okolo seba.
        </div>

        <button
            class="btn"
            onclick="toggleHint('hint-vyhladova')">
            Nápoveda
        </button>

        <div
            id="hint-vyhladova"
            class="hint">
            sem doplníme hint
        </div>

        <br><br>

        ${
          foundCaches.vyhladova
          ?
          `<p>😊 Keška už bola nájdená.</p>`
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

    showScreen("bonus");

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
        ? "😊"
        : "📍";
}
const yuccaPin =
document.getElementById("pin-yucca");

if(yuccaPin){

    yuccaPin.innerHTML =
    foundCaches.yucca
        ? "😊"
        : "📍";

}
const pigPin =
document.getElementById("pin-pig");

if(pigPin){

    pigPin.innerHTML =
    foundCaches.pig
        ? "😊"
        : "❓";

}
const lenivostPin =
document.getElementById("pin-lenivost");

if(lenivostPin){

    lenivostPin.innerHTML =
    foundCaches.lenivost
        ? "😊"
        : "📍";

}
const londonPin =
document.getElementById("pin-london");

if(londonPin){

    londonPin.innerHTML =
    foundCaches.london
        ? "😊"
        : "🌍";

}
const strelitziaPin =
document.getElementById("pin-strelitzia");

if(strelitziaPin){

    strelitziaPin.innerHTML =
    foundCaches.strelitzia
        ? "😊"
        : "📍";

}
const knihomolPin =
document.getElementById("pin-knihomol");

if(knihomolPin){

    knihomolPin.innerHTML =
    foundCaches.knihomol
        ? "😊"
        : "❓";

}

const pizzaPin =
document.getElementById("pin-pizza");

  if(pizzaPin){

    pizzaPin.innerHTML =
    foundCaches.pizza
        ? "😊"
        : "📍";

}
const obzerstvoPin =
document.getElementById("pin-obzerstvo");

if(obzerstvoPin){

    obzerstvoPin.innerHTML =
    foundCaches.obzerstvo
        ? "😊"
        : "📍";

}
const epipremnumPin =
document.getElementById(
    "pin-epipremnum"
);

if(epipremnumPin){

    epipremnumPin.innerHTML =
    foundCaches.epipremnum
        ? "😊"
        : "❓";

}
const zimaPin =
document.getElementById(
    "pin-zima"
);

if(zimaPin){

    zimaPin.innerHTML =
    foundCaches.zima
        ? "😊"
        : "❓";

}
const dobdobPin =
document.getElementById("pin-dobdob");

if(dobdobPin){

    dobdobPin.innerHTML =
    foundCaches.dobdob
        ? "😊"
        : "📍";

}
  const vyhladovaPin =
document.getElementById(
    "pin-vyhladova"
);

if(vyhladovaPin){

    vyhladovaPin.innerHTML =
    foundCaches.vyhladova
        ? "😊"
        : "📍";

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
        "🛋️ Obývačka";

}

if(livingRoomCard){

    livingRoomCard
        .classList
        .remove("locked");

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
        "📍 " + count + " / 13 kešiek";

}

const icons =
    document.getElementById(
        "spalna-icons"
    );

if(icons){

    icons.innerHTML =
        (foundCaches.smilstvo ? "😊 " : "📍 ") +
        (foundCaches.yucca ? "😊 " : "📍 ") +
        (foundCaches.pig ? "😊 " : "❓");

}
const livingIcons =
document.getElementById(
    "living-room-icons"
);

if(livingIcons){

    if(count >= 3){

        livingIcons.innerHTML =

            (foundCaches.lenivost
                ? "😊 "
                : "📍 ")

            +

            (foundCaches.london
                ? "😊 "
                : "🌍 ")

            +

            (foundCaches.strelitzia
                ? "😊 "
                : "📍 ")

            +

            (foundCaches.knihomol
                ? "😊 "
                : "❓");

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

    }

    if(kitchenTitle){

        kitchenTitle.innerText =
            "🍳 Kuchyňa";

    }

    if(kitchenText){

        kitchenText.innerText =
            "";

    }

    if(kitchenIcons){

    kitchenIcons.innerHTML =

       (foundCaches.pizza
    ? "😊 "
    : "📍 ")

+

(foundCaches.obzerstvo
    ? "😊 "
    : "📍 ")

+

(foundCaches.epipremnum
    ? "😊 "
    : "❓ ")

+

(foundCaches.zima
    ? "😊 "
    : "❓");

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

    }

    if(balconyTitle){

        balconyTitle.innerText =
            "🌿 Lodžia";

    }

    if(balconyText){

        balconyText.innerText =
            "";

    }

 if(balconyIcons){

    balconyIcons.innerHTML =

        (foundCaches.dobdob
    ? "😊 "
    : "📍 ")

+

(foundCaches.vyhladova
    ? "😊 "
    : "📍");

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

    if(answer == "1234"){

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

    if(answer == "1234"){

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

    if(answer == "1234"){

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

localStorage.removeItem(
    "foundCaches"
);

location.reload();

}
