let Answer = 0;
let Vibor = 0; 
let FirstNumber = 0;
let SecondNumber = 0;

const symbol = document.querySelectorAll('[data-value]');


symbol.forEach(Button => {
    Button.addEventListener('click', function() {
        Vibor = parseInt(this.getAttribute('data-value'));
    });
});


const rass = document.getElementById('Rass');

function calculator() {

    FirstNumber = parseFloat(document.getElementById("firstInput").value);
    SecondNumber = parseFloat(document.getElementById("SecondInput").value);

    switch(Vibor)
    {
    case 1: 
    Answer = FirstNumber + SecondNumber;
    break;
    case 2: 
    Answer = FirstNumber - SecondNumber;
    break;
    case 3: 
    Answer = FirstNumber * SecondNumber;
    break;        
    case 4: 
    Answer = FirstNumber / SecondNumber;
    break;
    case 5: 
    Answer = FirstNumber % SecondNumber;
    break;
    default:
    Answer = ""    
    break;    
    }
    
    document.getElementById('answer').value = Answer;
}

rass.addEventListener('click', calculator);


