import './scss/index.scss';
// const copy = require('./copy');
let lastInt = 0;
const intergers = require('./integers');
const uuid = require('./uuid');
const doit = document.getElementById('doit');

async function primeCache() {
    localStorage.removeItem('num');
    const int = await intergers.getInt();
    localStorage.setItem('num', int);
}

async function fetchInt() {
    const cachedValue = localStorage.getItem('num');
    if(cachedValue) {
        primeCache();
        return cachedValue;
    }
    const int = await intergers.getInt();
    primeCache();
    return int;
}

function handleClick(e) {
    doit.innerHTML = '&hellip;'
    document.querySelector('.out').innerHTML = "&nbsp;";
    doit.setAttribute('disabled', true);
    fetchInt().then(resp => {
        doit.removeAttribute('disabled');
        doit.innerHTML = 'Get another integer';
        document.querySelector('.out').innerText = resp;
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
// copybtn
document.querySelector('#guid').addEventListener('click', handleGuid);
document.getElementById('doit').addEventListener('click', handleClick);
handleClick();