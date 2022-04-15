import { ENG_words } from "./languages/lang_ENG.js";

const intentos = 6;
let int_restantes = intentos;
let intentoActual = [];
let letraSig = 0;
let longPalabra = 5;
let palabraCorrecta = ENG_words[Math.floor(Math.random() * ENG_words.length)]

console.log(palabraCorrecta)

function initTabla() {
    let tabla = document.getElementById("tablero");

    for (let i = 0; i < intentos; i++) {
        let fila = document.createElement("div")
        fila.className = "fila-letras"
        
        for (let j = 0; j < longPalabra; j++) {
            let caja = document.createElement("div")
            caja.className = "caja-letras"
            fila.appendChild(caja)
        }

        tabla.appendChild(fila)
    }
}

initTabla()

document.addEventListener("keyup", (e) => {
    if (int_restantes === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && letraSig !== 0) {
        borrarLetra()
        return
    }

    if (pressedKey === "Enter") {
        verificar()
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    }else{
        insertarLetra(pressedKey)
    }
})

function insertarLetra (pressedKey) {
    if (letraSig === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let fila = document.getElementsByClassName("fila-letras")[6 - int_restantes]
    let caja = fila.children[letraSig]
    animateCSS(caja, "pulse")
    caja.textContent = pressedKey
    caja.classList.add("relleno-caja")
    intentoActual.push(pressedKey)
    letraSig += 1
}

function borrarLetra () {
    let fila = document.getElementsByClassName("fila-letras")[6 - int_restantes]
    let caja = fila.children[letraSig - 1]
    caja.textContent = ""
    caja.classList.remove("relleno-caja")
    intentoActual.pop()
    letraSig -= 1
}

function verificar () {
    let fila = document.getElementsByClassName("fila-letras")[6 - int_restantes]
    let int_palabra = ''
    let int_correcto = Array.from(palabraCorrecta)

    for (const val of intentoActual) {
        int_palabra += val
    }

    if (int_palabra.length != 5) {
        toastr.error("No hay suficientes letras!")
        return
    }

    if (!ENG_words.includes(int_palabra)) {
        toastr.error("La palabra no esta en la lista!")
        return
    }
    
    for (let i = 0; i < longPalabra; i++) {
        let colorLetra = ''
        let caja = fila.children[i]
        let letra = intentoActual[i]
        
        let posicionLetra = int_correcto.indexOf(intentoActual[i])
        // is letter in the correct guess
        if (posicionLetra === -1) {
            colorLetra = 'grey'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (intentoActual[i] === int_correcto[i]) {
                // shade green 
                colorLetra = 'green'
            } else {
                // shade box yellow
                colorLetra = 'yellow'
            }

            int_correcto[posicionLetra] = "#"
        }

        let delay = 250 * i
        setTimeout(()=> {
            //flip box
            animateCSS(caja, 'flipInX')
            //shade box
            caja.style.backgroundColor = colorLetra
            colorearTeclado(letra, colorLetra)
        }, delay)
    }

    if (int_palabra === palabraCorrecta) {
        toastr.success("Felicitaciones!")
        int_restantes = 0
        return
    } else {
        int_restantes -= 1;
        intentoActual = [];
        letraSig = 0;

        if (int_restantes === 0) {
            toastr.error("No mas intentos!")
            toastr.info(`La palabra correcta era: "${palabraCorrecta}"`)
        }
    }
}

function colorearTeclado(letra, colorLetra) {
    for (const elem of document.getElementsByClassName("tecla")) {
        if (elem.textContent === letra) {
            let color_prev = elem.style.backgroundColor
            if (color_prev === 'green') {
                return
            } 

            if (color_prev === 'yellow' && colorLetra !== 'green') {
                return
            }

            elem.style.backgroundColor = colorLetra
            break
        }
    }
}

document.getElementById("teclado").addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("tecla")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element
    node.style.setProperty('--animate-duration', '0.3s');
    
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

