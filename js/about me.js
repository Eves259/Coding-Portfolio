//Darkmode
function dark () {
    var element = document.body; //Sets the variable element equal to the HTML body
    element.classList.toggle('darkmode'); //This allows darkmode to be toggled on and off
}

//Piano
const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']; //Keys used for white keys
const blackKeys= ['s', 'd', 'g', 'h', 'j']; //Keys used for black keys

const keys = document.querySelectorAll('.key'); //Gets all of the keys
const WK = document.querySelectorAll('.white-key.key'); //Gets all of the white keys
const BK = document.querySelectorAll('.black-key.key'); //Gets all of the black keys

keys.forEach(function(key) {
    key.addEventListener('click', function() {
        playNote(key); //Passes in the note so it knows what note to play
    });
});

document.addEventListener('keydown', function(e) { //finding the index of the key pressed and then coresponding it to the index in the array. The keys are in the same order as the array
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = whiteKeys.indexOf(key);//Gets the index of the whitekeys
    const blackKeyIndex = blackKeys.indexOf(key);//Gets the index of the black keys

    if(whiteKeyIndex > -1) playNote(WK[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(BK[blackKeyIndex]);//-1 is returned when it can't find anything, so this is for if it finds something
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note); //Checks dataset-note for the notes with matching ids
    noteAudio.currentTime = 0; //Restarts the file at the beginning and then replays it
    noteAudio.play();//Plays the audio
    key.classList.add('active'); //Adds the active class to the keys when they are pressed
    noteAudio.addEventListener('ended', function() {
    key.classList.remove('active'); //This removes the active class when the key is no longer being pressed
    });
};

//Password Reveal
let keysPressed = {}; //keysPressed is set equal to an object

//Answer 3
document.addEventListener('keydown', function keyPressTest(event) { //These are used to test if a key is being pressed down. If three keys are being pressed at the same time then it reveals an answer
    keysPressed[event.key] = true;
    if (keysPressed['x'] && keysPressed['v'] && keysPressed['n']) {
        $('#answer-3').css('display', 'block');
    }
});

document.addEventListener('keyup', function keyPressClear(event) {
    delete keysPressed[event.key];
});

//Answer 4
document.addEventListener('keydown', function keyPressTest(event) {
    keysPressed[event.key] = true;
    if (keysPressed['v'] && keysPressed['n'] && keysPressed['z']) {
        $('#answer-4').css('display', 'block');
    }
});

document.addEventListener('keyup', function keyPressClear(event) {
    delete keysPressed[event.key];
});

//Answer 5
document.addEventListener('keydown', function keyPressTest(event) {
    keysPressed[event.key] = true;
    if (keysPressed['n'] && keysPressed['z'] && keysPressed['c']) {
        $('#answer-5').css('display', 'block');
    }
});

document.addEventListener('keyup', function keyPressClear(event) {
    delete keysPressed[event.key];
});

//Answer 6
document.addEventListener('keydown', function keyPressTest(event) {
    keysPressed[event.key] = true;
    if (keysPressed['b'] && keysPressed['m'] && keysPressed['x']) {
        $('#answer-6').css('display', 'block');
    }
});

document.addEventListener('keyup', function keyPressClear(event) {
    delete keysPressed[event.key];
});

//Answer 7
document.addEventListener('keydown', function keyPressTest(event) {
    keysPressed[event.key] = true;
    if (keysPressed['z'] && keysPressed['c'] && keysPressed['b']) {
        $('#answer-7').css('display', 'block');
    }
});

document.addEventListener('keyup', function keyPressClear(event) {
    delete keysPressed[event.key];
});

//Game
    $('#game-button-1').click(function () { //This causes whatever button is clicked on to spin and change color. If all of the colors are the same then an answer is revealed. Buttons affect other buttons.
        $('#game-button-1').toggleClass('rotate');
        $('#game-button-2').toggleClass('rotate');
        if ($('#game-button-1').has('rotate') && $('#game-button-2').hasClass('rotate') && $('#game-button-3').hasClass('rotate') && $('#game-button-4').hasClass('rotate')) {
            $('#answer-1').css('display', 'block');
        }
    });
    
    $('#game-button-2').click(function () {
        $('#game-button-2').toggleClass('rotate');
        $('#game-button-3').toggleClass('rotate');
        $('#game-button-4').toggleClass('rotate');
        if ($('#game-button-1').hasClass('rotate') && $('#game-button-2').hasClass('rotate') && $('#game-button-3').hasClass('rotate') && $('#game-button-4').hasClass('rotate')) {
            $('#answer-1').css('display', 'block');
        }
    });
    
    $('#game-button-3').click(function () {
        $('#game-button-1').toggleClass('rotate'); 
        $('#game-button-2').toggleClass('rotate');
        $('#game-button-3').toggleClass('rotate');
        if ($('#game-button-1').hasClass('rotate') && $('#game-button-2').hasClass('rotate') && $('#game-button-3').hasClass('rotate') && $('#game-button-4').hasClass('rotate')) {
            $('#answer-1').css('display', 'block');
        }
    });
    
    $('#game-button-4').click(function () {
        $('#game-button-3').toggleClass('rotate');
        $('#game-button-4').toggleClass('rotate');
        if ($('#game-button-1').hasClass('rotate') && $('#game-button-2').hasClass('rotate') && $('#game-button-3').hasClass('rotate') && $('#game-button-4').hasClass('rotate')) {
            $('#answer-1').css('display', 'block');
        }
    });

//Drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("img", ev.target.id);
}

function drop(ev) { //This is used to drag and drop an image onto another one and then change the image to a new one
    ev.preventDefault();
    var data = ev.dataTransfer.getData("img");
    ev.target.appendChild(document.getElementById(data));
    $('#tony-gate').attr('src', '../images/tony-hat.jpg');
    $('#answer-2').css('display', 'block');
}

//Password
function password() { //Allows you to view what you typed into the textbox
    var code = document.getElementById("secretCode");
    if (code.type === "password") {
        code.type="text";   
    } else {
    code.type = "password";
    }
}

function onSubmit() { //This is used to take the user to a new page if the code is correct. If it isn't the button's border turns red and a hint is given
if (document.getElementById('secretCode').value == 'HORIZON') {
    $('#codeSubmit').css('border', 'solid #0BA674 .1rem');
    window.location.href='tony.html';
} else { ;
    alert('Try again. Hint: You see it twice a day');
    $('#codeSubmit').css('border', 'solid red .1rem'); //Changes the border color to red if the password is entered incorrectly
    setTimeout(function() {
    $('#codeSubmit').css('border', 'solid white .1rem');
    }, 300);
}
}

