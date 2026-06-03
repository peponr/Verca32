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
        `;
    }

    showScreen("cache");
}
