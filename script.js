 let cardArray = [
    {
        id: 1,
        name: 'earth',
        img: 'images/earth.svg',
        estado: "down"
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'images/jupiter.svg',
        estado: "down"
    },
    {
        id: 3,
        name: 'mars',
        img: 'images/mars.svg',
        estado: "down"
    },
    {
        id: 4,
        name: 'mercury',
        img: 'images/mercury.svg',
        estado: "down"
    },
    {
        id: 5,
        name: 'saturn',
        img: 'images/saturn.svg',
        estado: "down"
    },
    {
        id: 6,
        name: 'uranus',
        img: 'images/uranus.svg',
        estado: "down"
    },
    {
        id: 7,
        name: 'earth',
        img: 'images/earth.svg',
        estado: "down"
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'images/jupiter.svg',
        estado: "down"
    },
    {
        id: 9,
        name: 'mars',
        img: 'images/mars.svg',
        estado: "down"
    },
    {
        id: 10,
        name: 'mercury',
        img: 'images/mercury.svg',
        estado: "down"
    },
    {
        id: 11,
        name: 'saturn',
        img: 'images/saturn.svg',
        estado: "down"
    },
    {
        id: 12,
        name: 'uranus',
        img: 'images/uranus.svg',
        estado: "down"
    }
]
//SELECCION DE VARIABLES
const startGame$$ = document.querySelector('button');
const attempts$$ = document.querySelector('[data-function="attempts"]');
const score$$ = document.querySelector('[data-function="score"]');
const gameBoard$$ = document.querySelector('[data-function="grid"]');
let clicks = 0;
let planeta1;
let planeta2;
let indice1;
let indice2;

//FUNCION QUE BARAJE LAS IMAGENES CADA VEZ QUE EMPIECE EL JUEGO
function shuffle(arr) {
    for (let index = 0; index < arr.length; index++) {
        k = (Math.floor(Math.random()*(arr.length)));
        [arr[index], arr[k]] = [arr[k], arr[index]];
    }
    return arr;
}

function start () {
    for (let index = 0; index < cardArray.length; index++) {
        cardArray[index].estado = "down";
        
    };
    gameBoard$$.innerHTML = "";
    const shuffledArray = shuffle(cardArray);
    let arrayImgs = shuffledArray.map(planet => (planet.img));
    score$$.innerText = 0;
    attempts$$.innerText = 0;

//IMPRESION EN PANTALLA DE LAS IMAGENES Y SELECCION DE CADA UNA DE ELLAS
    for (let index = 0; index < shuffledArray.length; index++) {
        gameBoard$$.innerHTML += '<img class="universeImg" src="./images/universe.svg" />';
    };
    tablero$$ = document.querySelectorAll(".universeImg");
    
//CONTROL DE CLICKS Y COMPROBACION 
    for (let index = 0; index < tablero$$.length; index++) {
        tablero$$[index].addEventListener('click', () => {
            console.log(tablero$$[index].src);
            
            console.log(arrayImgs[index]);
            if(cardArray[index].estado == "down" && clicks == 0){
                tablero$$[index].src = arrayImgs[index];
                planeta1 = tablero$$[index];
                indice1 = index;
                cardArray[index].estado = "up"
                clicks++;
                
            } else if (cardArray[index].estado == "down" && clicks == 1){
                tablero$$[index].src = arrayImgs[index];
                planeta2 = tablero$$[index];
                indice2 = index;
                cardArray[index].estado = "up"
                clicks++;
                comprobacion();
            }      
        });  
    }; 
}
startGame$$.addEventListener('click', start);

function comprobacion () {
    attempts$$.innerText++;
    setTimeout(() => {
        if (planeta1.src == planeta2.src) {
            planeta1.src = "./images/tick.svg";
            planeta2.src = "./images/tick.svg";
            score$$.innerText++;
            if (score$$.innerText == "6") {
                alert("Lo has conseguido");
            }
        } else {
            planeta1.src = "./images/universe.svg";
            planeta2.src = "./images/universe.svg";
            cardArray[indice1].estado = "down";
            cardArray[indice2].estado = "down";
        };
        clicks = 0; //CLICKS A 0 PARA QUE NO PUEDAS DAR MÁS DE 2 CLICKS POR INTENTO
    }, 1000);
};


