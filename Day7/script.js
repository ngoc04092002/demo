
const result = document.querySelector('.result');
const key = document.querySelector('.key-number');
const eLocation = document.querySelector('.Location-number');
const which = document.querySelector('.which-number');
const code = document.querySelector('.code-number');
const press= document.querySelector('.press_key');
const container =document.querySelector('.container');


window.addEventListener('keydown', (e) => {
    press.classList.add('hidden');
    container.classList.remove('hidden');

    let keyName = e.keyCode === 32 ? 'Space' :e.key; 
    eLocation.innerHTML = e.location;
    result.innerHTML = e.which;
    key.innerHTML=keyName;
    which.innerHTML=e.which;
    code.innerHTML = e.code;
})