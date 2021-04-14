//Darkmode
function dark () {
    var element = document.body;
    element.classList.toggle('darkmode');
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
    const whiteKeyIndex = whiteKeys.indexOf(key);
    const blackKeyIndex = blackKeys.indexOf(key);

    if(whiteKeyIndex > -1) playNote(WK[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(BK[blackKeyIndex]);//-1 is returned when it can't find anything, so this is for if it finds something
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note); //Checks dataset-note for the notes with matching ids
    noteAudio.currentTime = 0; //Restarts the file at the beginning and then replays it
    noteAudio.play();
    key.classList.add('active'); //Adds the active class to the keys when they are pressed
    noteAudio.addEventListener('ended', function() {
    key.classList.remove('active'); //This removes the active class when the key is no longer being pressed
    });
};

//Password
function password() {
    var code = document.getElementById("secretCode");
    if (code.type === "password") {
        code.type="text";   
    }else{
    code.type = "password";
    }
}

function onSubmit() {
if (document.getElementById('secretCode').value == 'HORIZON') {window.location.href='tony.html'; }else{ alert('Try again. Hint: A type of dream done during the day. Type in all caps with no spaces :)'); }
}