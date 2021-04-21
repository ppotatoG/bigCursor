const wrap = document.querySelector('#wrap')
const div = document.querySelector('#wrap div')
const i = document.querySelector('i')

function resultFun(x) {
    let positionLeft = x.clientX;
    let positionTop = x.clientY;

    const iWidth = i.offsetWidth;
    const iHeight = i.offsetHeight;

    let iTop = i.style.top=positionTop-iWidth/2+'px'
    let ileft = i.style.left=positionLeft+'px'
}

window.addEventListener('load', function(){
    div.addEventListener('mouseover', function(){
        document.addEventListener("mousemove",resultFun);  
        i.classList.remove('none')
    })
})

// window.addEventListener('load', resultFun)

// resultFun()
