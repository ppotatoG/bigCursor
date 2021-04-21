
const wrap = document.querySelector('#wrap')
const div = document.querySelector('#wrap div')
const img = document.querySelector('img')

function resultFun(x) {
    let positionLeft = x.clientX;
    let positionTop = x.clientY;

    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    // const divWidthPoint = div.clientTop;
    // const divHeightPoint = div.clientLeft;

    // console.log(positionLeft)
    // console.log(divWidthPoint)

    const divWidthPoint = div.offsetTop;
    const divHeightPoint = div.offsetLeft;

    console.log(positionLeft)
    console.log(divWidthPoint)

    let imgTop = img.style.top=positionTop-imgWidth/2+'px'
    let imgleft = img.style.left=positionLeft+'px'
}

window.addEventListener('load', function(){
    div.addEventListener('mouseover', function(){
        document.addEventListener("mousemove",resultFun);  
        img.classList.remove('none')
    })
    div.addEventListener('mouseout', function(){
        document.removeEventListener("mousemove",resultFun);    
        img.classList.add('none')
    })

    // const divWidthPoint = div.clientRect;
    // const divHeightPoint = div.clientLeft;

    // console.log(divWidthPoint)
    // console.log(divHeightPoint)

    // console.dir(div)

    const divWidthPoint = div.offsetTop;
    const divHeightPoint = div.offsetLeft;

    console.log(divWidthPoint)
    console.log(divHeightPoint)
})
