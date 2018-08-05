import './scss/index.scss';

let lastInt = 0;
const intergers = require('./integers');
const uuid = require('./uuid');
function handleClick(e) {
    intergers.getInt().then(resp => {
       document.querySelector('.out').innerText = resp;
       lastInt = resp;
       document.querySelector('.field').classList.remove('is-invisible');
    }).catch(e => {
        console.error(e);
    });
    uuid.getGuid().then(resp => {
        console.log('guid', resp);
    })
}

function handleCopy(e) {
    navigator.clipboard.writeText(lastInt).then(() => {
        let ok = document.createElement('span');
        ok.classList.add('tag', 'is-success');
        ok.innerText= 'copied!';
        //<span class="tag is-success">Success</span>
        document.querySelector('.out').appendChild(ok);
    });
}

handleClick();
// copybtn
document.querySelector('.copybtn').addEventListener('click', handleCopy);
document.getElementById('doit').addEventListener('click', handleClick);