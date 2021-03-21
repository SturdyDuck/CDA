//var open_butt = document.getElementById('mail-submit');
//open_butt.onclick = showForm;
var form = document.getElementById('ajax-form');
form.onsubmit = showForm;

var frame_wrap = document.getElementById('mail-sended');
var frame = document.getElementById('the-frame');

setTimeout(function() {
    var close_butt = frame.contentDocument.getElementById('close_button');
    close_butt.onclick = buttClicked;
}, 1000);

function buttClicked() {
    frame_wrap.hidden = true;
}

function showForm() {
    frame_wrap.hidden = false;
}