function main() {
    var bodyEl = document.getElementsByTagName('body')[0];
    addIftachStuff(bodyEl);
    addAvivStuff(bodyEl);
    addTomerStuff(bodyEl);
}

function addIftachStuff(bodyEl) {
    var d = document.createElement('h3');
    d.textContent = 'Iftach is the man';
    bodyEl.appendChild(d);
}

function addAvivStuff(bodyEl) {
    var d = document.createElement('h1');
    d.textContent = 'My name is Inigo Montoya,prepare to die!';
    bodyEl.insertBefore(d, bodyEl.firstChild);
}

function addIftachStuff(bodyEl) {
    var d = document.createElement('h3');
    d.textContent = 'UZI is the man';
    bodyEl.appendChild(d);
}

function addTomerStuff(bodyEl) {
    alert('not working')
}
