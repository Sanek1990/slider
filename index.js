let offset = 0;  //смещение слайдера
const sliderLine = document.querySelector('.slider__line');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

next.addEventListener('click', function()  {
    offset += 270;
    if (offset > 1890) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
});

prev.addEventListener('click', function()  {
    offset -= 270;
    if (offset < 0) {
        offset = 1890;
    }
    sliderLine.style.right = offset + 'px';
})
