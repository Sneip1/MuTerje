//Model
const car = document.getElementById('carDiv');
const terjeKjorer = new Audio('img/TerjeKjorer.mp3');
const BliMedIBilen = new Audio('img/Bli_med_i_bilen.mp3');
const kjreoverbestemor = new Audio('img/kjre_over_bestemor.mp3');
const Dusuger = new Audio('img/Du_Tapte.mp3');
const MDG = new Audio('img/MDG.mp3');
const MDGbil = new Audio('img/MDG_Bil.mp3');
const Stempameg = new Audio('img/Stem_pa_meg.mp3');

let cycle = 0;
let randomNumber = 0;
let encounterView = "";
let randomSvar = 0;
//   let plusCool = +10;
//   let minusCool = -10;

let gif;



//View
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`

      <progress min="0" max="100" value="50" name="hel" id="progress"></progress>

       <div id="gameContainer">
          
          <img id="carDiv" src="img/bilRiktig.png">
          <div>${encounterView}</div>
          <div id="buttonDiv">
              <button onclick="startGame()">Start</button>
              <button onclick="svar(); BliMedIBilen.play()">Svar 1</button>
              <button onclick="svar(); kjreoverbestemor.play()">Svar 2</button>
              <button onclick="svar(); Dusuger.play()">Svar 3</button>
              
        </div>
      </div>
      `;
}


//Controller
function startGame() {
    setTimeout(() => {
        document.getElementById('gameContainer').style.backgroundImage = "url(img/BevegeligVei.gif)";
        terjeKjorer.play();
        terjeKjorer.volume = 0.1;
    }, 1);
    randomEncounter();
    updateView();
}
function terjeKjorerPause() {
    terjeKjorer.pause();
    setTimeout(() => {
        document.getElementById('gameContainer').style.backgroundImage = "url(img/Bakgrunnsbilde.png)";

    }, 1);
}

// function reduceLevel() {
//     document.getElementById('progress').value -= 10;
// }

// function upLevel() {
//     ''
//     document.getElementById('progress').value += 10;
// }

function randomEncounter() {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 3) + 1;
        terjeKjorerPause();
        
        if (randomNumber === 1) {
            encounterView += `<img class="randomEncounterImg" src="img/Erna.png">`;
            updateView();
            setTimeout(() => {
                Stempameg.play();
            }, 2000);
        } else if (randomNumber === 2) {
            encounterView += `<img class="randomEncounterImg" src="img/LanMarie.png">`;
            updateView();
            setTimeout(() => {
                MDG.play();
            }, 2000);
        } else if (randomNumber === 3) {
            encounterView += `<img class="randomEncounterImg" src="img/SophieElise.png">`;
            updateView();
            setTimeout(() => {
                MDGbil.play();
            }, 2000);
        }
        return encounterView;
    }, 15000);
    updateView();
}

function coolBar() {
    let progressbar = document.getElementById('progress');
    let randomValue = Math.floor(Math.random() * 2);
    if (randomValue === 0) {
        progressbar.value += 10;
    } else {
        progressbar.value -= 10;
    }
}



function svar() {


    // randomSvar = Math.floor(Math.random() * 3) + 1;
    // if (randomSvar === 1) {
    //     //Audioforslag.play();
    // }
    // else if (randomSvar === 2) {
    //     //forslag.play();
    // }
    // else if (randomSvar === 3) {
    //     //svarforslag.play();
    // }

    setTimeout(() => {
        encounterView = "";
        setTimeout(() => {
            coolBar();
            document.getElementById('gameContainer').style.backgroundImage = "url(img/BevegeligVei.gif)";
        },1);
        terjeKjorer.play();
        
        updateView();
        randomEncounter();
    }, 3000);
}
