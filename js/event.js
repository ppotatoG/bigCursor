const box = document.querySelector('#box');

function resultFun(x) {
    const positionLeft = x.clientX;
    const positionTop = x.clientY;

    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    box.style.left = positionLeft - boxWidth / 2 + "px";
    box.style.top = positionTop - boxHeight / 2 + "px";
}

const div = document.querySelector('#wrap >div')

div.addEventListener('mouseover', function(){
    document.addEventListener('mousemove', resultFun);
    box.classList.remove('none')
})

div.addEventListener('mouseout', function(){
    document.removeEventListener('mousemove', resultFun);
    box.classList.add('none')
})