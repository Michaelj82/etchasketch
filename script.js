const board = document.querySelector('#board');

let rainbow = false


function rainbowMode(){
    rainbow = rainbow !== true;
}

function randomRGB(){
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';

}





function makeBoard(number){
    for (i = 0; i < (number ** 2); i++){
        let square = document.createElement('div');
        square.classList.add('square')
        board.appendChild(square)
        square.onmouseover = function(){
            if (rainbow){
                let color = randomRGB()
                square.style.backgroundColor = color;
            }else{
                square.style.backgroundColor = "black";
            }
            


        }

    }

}

function changeSize(num){
    num = Number(num)
    if (num){
        if (num > 100){
            getNumber('No numbers over 100')
        }else if (num < 1){
            getNumber('No numbers zero or below')
        }else if (num % 1 != 0){
            getNumber("No decimals")
        }else{
            board.innerHTML = "";

            board.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr');



            makeBoard(num)
        }



    }else{
        getNumber('No words')

    }


}



function getNumber(phrase){
    let num = prompt(`${phrase}`)
    changeSize(num)


}



makeBoard(16)

