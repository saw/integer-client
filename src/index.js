import './scss/index.scss';

const intergers = require('./integers');
const uuid = require('./uuid');
function handleClick(e) {
    intergers.getInt().then(resp => {
       document.querySelector('.out').innerText = resp;
       document.querySelector('.field').classList.remove('is-invisible');
    }).catch(e => {
        console.error(e);
    });
    uuid.getGuid().then(resp => {
        console.log('guid', resp);
    })
}

handleClick();

document.getElementById('doit').addEventListener('click', handleClick);