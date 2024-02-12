// Option 1: Directly set on the HTML elements
    //<button onclick="console.log(7)">click Me</button>

//option 2: add onclick function

// IMPORTaNT: we will use this
    //<button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor='red';
}

//option: 3

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option 3 another [we will use it sometimes]
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
     document.body.style.backgroundColor = 'purple';
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

 function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// option 4 final
// IMPORTANT: we will use some times
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})