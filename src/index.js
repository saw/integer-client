const intergers = require('./integers');

function handleClick(e) {
    intergers.getInt().then(resp => {
       document.querySelector('.out').innerText = resp;
    }).catch(e => {
        console.error(e);
    });
}

document.getElementById('doit').addEventListener('click', handleClick);