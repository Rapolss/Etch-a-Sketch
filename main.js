// Constant Declaration
const buttonreset = document.querySelector('.resetbtn');
const palleteSwap = document.querySelector('#palette');
const gridSizing = document.querySelector('#sizing');
const canvas = document.querySelector('.canvas');
const numbsize = document.querySelector('.numbsize');



let toggle = true;
let resize = true;


//Function Declaration
function ClearPixel(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = "#474747");
}

function CanvasResize(){

    canvas.innerHTML= '';
    

    document.documentElement.style.setProperty(`--${this.name}`, this.value);
    numbsize.innerHTML= (`${this.value}x${this.value}`);
    let inputGrid = this.value;
    let areaCanvas = inputGrid*inputGrid;
    for (let i = 0; i < areaCanvas ;i++){
        const box = document.createElement('div');
        box.classList.add('pixel');
        box.setAttribute('draggable','false');


        function Paint(){
            if(toggle == true) return
            box.style.backgroundColor = palleteSwap.value;
        }

        function Click(){
            box.style.backgroundColor = palleteSwap.value;
        }



        box.addEventListener('mouseover', Paint);
        box.addEventListener('mousedown', Click);

        canvas.appendChild(box);
        // console.log(gridSizing.value);
    }
}


function TogglePainting(){
    toggle = !toggle;
}


//Interaction Decleration

buttonreset.addEventListener('click', ClearPixel);
gridSizing.addEventListener('input', CanvasResize);
window.addEventListener('mousedown', TogglePainting);
window.addEventListener('mouseup', TogglePainting);
