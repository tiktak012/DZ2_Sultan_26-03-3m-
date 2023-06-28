// const block = document.querySelector('.block_2')
// let positionX=0
// let positionY=0
// const move=()=> {
//     if (positionX < 450 && positionY===0) {
//         positionX+=5
//         block.style.left = `${positionX}px`
//         setTimeout(move, 1)
//     } else if (positionX >= 450 && positionY < 450) {
//         positionY+=5
//         block.style.top = `${positionY}px`
//         setTimeout(move, 1)
//     } else if (positionX>0 && positionY>=450) {
//         positionX-=5
//         block.style.left=`${positionX}px`
//         setTimeout(move, 1)
//     } else if (positionX>=0&&positionY>0){
//         positionY-=5
//         block.style.top= `${positionY}px`
//         setTimeout(move, 1)
//     }
//
// }
// move()

//////////////////////////////////////////////////////////

const stop = document.querySelector('.stop')
const start = document.querySelector('.start')
const counter = document.querySelector('.counter')
const clear = document.querySelector('.clear')
const resume = document.querySelector('.resume')
const input = document.createElement('input')
counter.append(input)
input.value='0'
input.type='Number'
let timerId
function timer(){
    input.value++
}
start.onclick=function (){
    timerId=setInterval(timer,1000)
}
stop.onclick=function (){
    clearInterval(timerId)
}
resume.onclick=function (){
    timerId=setInterval(timer,1000)
}
clear.onclick=function (){
    clearInterval(timerId)
    input.value='0'
}
