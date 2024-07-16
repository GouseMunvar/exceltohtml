let sliderone=document.getElementById("one")
let slidertwo=document.getElementById("two")
let displayValOne=document.getElementById("range1")
let displayValtwo=document.getElementById("range2")
let minGap=5;
sliderone.addEventListener('input',()=>{
    if(slidertwo.value-sliderone.value <=minGap){
        sliderone.value=slidertwo.value-minGap
    }
})
slidertwo.addEventListener('input',()=>{
    if(slidertwo.value-sliderone.value <=minGap){
        slidertwo.value=sliderone.value+minGap
    }
})