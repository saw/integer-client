import './scss/index.scss';
// const copy = require('./copy');
let btn = document.querySelector('.copybtn i');
let lastInt = 0;
const intergers = require('./integers');
const uuid = require('./uuid');
function handleClick(e) {
    if(e && e.target) {
        e.target.innerHTML = '&hellip;'
    }
    // document.querySelector('.field').classList.add('is-invisible');
    document.querySelector('.out').innerHTML = "&nbsp;";
    intergers.getInt().then(resp => {
        if(e && e.target) {
            e.target.innerHTML = 'Get another integer'
        }
       document.querySelector('.out').innerText = resp;
       lastInt = resp;
       document.querySelector('.field').classList.remove('is-invisible');
       btn.className = 'fas fa-copy';
    }).catch(e => {
        console.error(e);
    });
    // uuid.getGuid().then(resp => {
    //     console.log('guid', resp);
    // })
}

// function handleCopy(e) {
//     copy(document.querySelector('.out'));
//     // navigator.clipboard.writeText(lastInt).then(() => {
//     //     btn.classList.remove('fa-copy');
//     //     btn.classList.add('fa-check');
//     // });
// }

handleClick();
// copybtn
// document.querySelector('.copybtn').addEventListener('click', handleCopy);
document.getElementById('doit').addEventListener('click', handleClick);