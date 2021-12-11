const modal = document.querySelector('.modal');
const modal_hidden = document.querySelector('.modal-hidden');
const close = document.querySelector('.close');
const x = document.querySelector('.x');

modal.addEventListener('click', function(){
    modal_hidden.classList.remove('hidden');
});

close.addEventListener('click', function(){
    modal_hidden.classList.add('hidden');
});

x.addEventListener('click', function(){
    modal_hidden.classList.add('hidden');
});

modal_hidden.addEventListener('click', function(e){
    if(e.target === e.currentTarget) modal_hidden.classList.add('hidden');
});
