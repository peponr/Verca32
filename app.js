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

            <p>
                Sedem hlavných hriechov tvorí tradičný zoznam nerestí...
            </p>

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

<button
 class="btn"
 onclick="logCache('smilstvo')">
Zalogovať nález </button>

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

        <p>
            Yucca je rod trvalých rastlín z čeľade
            Asparagaceae...
        </p>

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

<button
 class="btn"
 onclick="logCache('yucca')">
Zalogovať nález </button>

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

        <p>
            Koľko eur mal Tomáš
            v prasiatku na začiatku?
        </p>

        <input
            id="pig-answer"
            type="number">

        <br><br>

        <button
            class="btn"
            onclick="checkPig()">
            Zalogovať odpoveď
        </button>
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
function logCache(cacheId){

```
foundCaches[cacheId] = true;

localStorage.setItem(
    "foundCaches",
    JSON.stringify(foundCaches)
);

updateProgress();

alert(
    "😊 Keška bola úspešne zalogovaná."
);

showScreen("home");
```

}
}
function updateProgress(){

```
let count = 0;

if(foundCaches.smilstvo) count++;
if(foundCaches.yucca) count++;
if(foundCaches.pig) count++;

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
```

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
updateProgress();




