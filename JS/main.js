var today = new Date() ;
var hourNow = today.getHours() ;
var greeting;

if (hourNow > 18) {
    greeting = 'Fuck Off!';
} else if (hourNow > 12) {
    greeting = 'I didnt put my nose in her ass!';
} else if (hourNow > 0) {
    greeting = 'I didnt suck her ass!';
} else {
    greeting = 'I didnt lick her ass!';
}

document.write('<h1>' + greeting + '</h1>');

var button_1 = alert('mike tyson');
document.getElementById('button_1')