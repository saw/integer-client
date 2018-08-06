import './scss/index.scss';
// const copy = require('./copy');
let lastInt = 0;
const intergers = require('./integers');
const uuid = require('./uuid');
const doit = document.getElementById('doit');
function handleClick(e) {
    doit.innerHTML = '&hellip;'
    document.querySelector('.out').innerHTML = "&nbsp;";
    intergers.getInt().then(resp => {
        doit.innerHTML = 'Get another integer';
        document.querySelector('.out').innerText = resp;
        lastInt = resp;
    }).catch(e => {
        console.error(e);
    });
}

function handleGuid(e) {
    let out = document.querySelector('.guid');
    document.querySelector('#guid').innerHTML = '&hellip;'
    out.querySelector('ul').innerHTML = '<li>';
    uuid.getGuid().then(resp => {

        out.classList.remove('is-invisible');
        let str = `
       <li title="id">${resp.id}</li>
       <li title="int">${resp.int}</li>
       <li title="base32 string">${resp.short}</li>
       `;
        e.target.innerText = 'Get me a fresh UUID'
        out.querySelector('ul').innerHTML = str;
    });
}

handleClick();
// copybtn
document.querySelector('#guid').addEventListener('click', handleGuid);
document.getElementById('doit').addEventListener('click', handleClick);