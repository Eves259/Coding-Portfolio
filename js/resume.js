function dark () {
    var element = document.body;//Sets the variable element equal to the HTML body
    element.classList.toggle('darkmode');//This allows darkmode to be toggled on and off
}

$('#activate-sun').click(function() { //Activates the sun/moon animation
    $('#sun').toggleClass('active-sun');
});

$('#switchToDarkMode').click(function() { //Changes the text of the button to say moon when in dark mode and can toggle back to sun
    $('#activate-sun').html($('#activate-sun').html() == 'Activate Sun' ? 'Activate Moon':'Activate Sun');
});

function askQuestions() { //These prompts are used for the story
    var name = prompt('Enter your name');
    var place = prompt('Enter a location');
    var time = prompt('Enter a time of day');
    var item = prompt('Enter an item');
    var pet = prompt('Enter a pet name');
    var friend = prompt('Enter the name of your friend');
    var music = prompt('Enter a genre of music');
    var stranger = prompt('Enter a random name');

    document.getElementById('story').innerHTML = "You went to the " + place + ". " + "Your friend " + friend + " called out to you and asked you if you wanted a " + item + ". " + "You said no because you had to get back home to feed your " + pet + ". " + "It was " + time + ". On your way home you passed a stranger that asked for your name and you said it was " + name + ". You asked the stranger's name and they said it was " + stranger + ". They recommended that you listen to a new song but you told them you only listen to " + music + ". They waved goodbye after that and you walked home.";
} //This puts the story with the user's inputs