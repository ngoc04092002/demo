const close = document.querySelector('.close');
const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.item1 img');
const image = document.querySelector('.image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let indexCopy;

close.addEventListener('click', function() {
    gallery.classList.add('hidden');
})

function ShowSlide(){
        let url = items[indexCopy].src;
        image.firstElementChild.src = url;
        gallery.classList.remove('hidden');
        if(indexCopy == 0) {
            prev.classList.add('hidden');
        }else if(items.length-1==indexCopy) {
            next.classList.add('hidden');
        }else{
            if(prev.classList.contains('hidden')) prev.classList.remove('hidden');
            else  if(next.classList.contains('hidden')) next.classList.remove('hidden');
        }
}

items.forEach((item,index) => {
    item.addEventListener('click', function(){
        indexCopy = index;
        ShowSlide();
    })
})

prev.addEventListener('click', function(){
    indexCopy-=1;
    ShowSlide();
})

next.addEventListener('click', function(){
    indexCopy+=1;
    ShowSlide();
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) gallery.classList.add("hidden");
  });









