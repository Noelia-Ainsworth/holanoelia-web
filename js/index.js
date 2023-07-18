'use strick'

//Cuando hago CLICK en headerBtn hace una FUNTION
    //headerNav le TOGGLE la clase isActive

const headerBtn = document.querySelector(`.Header-btn`)
const headerNav = document.querySelector(`.Header-nav`)

console.log( headerBtn )
console.log( headerNav)

headerBtn.addEventListener(`click` , ()=>{
    headerNav.classList.toggle(`isActive`)
})

//Cuando hago CLICK en designWrap hace una FUNTION



//const designWrap     = document.querySelector(`.Design-wrap`)
//const designLightBox = document.querySelector(`.Design-lightbox`)
//const designBtn      = document.querySelector(`.Design-btn`)

//console.log( designWrap )
//console.log( designLightBox )
//console.log( designBtn )

//designLighBox le add la clase isActive

//designWrap.addEventListener(`click` , ()=>{
//    designLightBox.classList.add(`isActive`)
//})

//Cuando hago CLICK en designBtn hace una FUNTION
    //designLightBox le REMOVE la clase isActive

//designBtn.addEventListener(`click` , ()=>{
//    designLightBox.classList.remove(`isActive`)
//})



// Cuando CLICK en btnPrev hace una FUNTION
 //MeSliderActive++
 // Si MeSliderActive es IGUAL o MAYOR a 11
 // Entonces MeSliderActive es igual a 0
//Todas las meImgList le REMOVE la clase isActive
//A meImgList le ADD la clase isActive

//Cuando hago CLICK en btnNext hace una FUNTION
//MESliderActive--
 //Si MeSliderActive es IGUAL o MENOR a -1
 //Entonces MesliderActive es igual a 11



 const btnPrev      = document.querySelector(`.Btn-prev`)
 const btnNext      = document.querySelector(`.Btn-next`)
 const meImgList    = document.querySelectorAll(`.Me-img`)

 console.log( btnPrev )
 console.log( btnNext )
 console.log( meImgList )

 
 let sliderActive = 0
 let setActive = ()=>{
    meImgList.forEach(( eachMeImg , index )=>{
        meImgList[index].classList.remove(`isActive`)
    })
    meImgList[sliderActive].classList.add(`isActive`)
 }

 btnNext.addEventListener(`click` , ()=>{

    sliderActive++
    if( sliderActive >= meImgList.length ){
        sliderActive = 0
    }

    setActive()

 })

 btnPrev.addEventListener(`click` , ()=>{
    sliderActive--
    if( sliderActive <= -1 ){
        sliderActive = meImgList.length - 1
    }

    setActive()
 })