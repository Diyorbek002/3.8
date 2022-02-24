var elForm = document.querySelector(".header__form")

var elInput = document.querySelector(".header__input")

var elSpanMan = document.querySelector(".box__man")

var elSpanVelo = document.querySelector(".box__velo")

var elSpanCar = document.querySelector(".box__car")

var elSpanAiroplan = document.querySelector(".box__airoplan")

elForm.addEventListener("submit" , function (event){
    event.preventDefault()
    
    var elInputVal = elInput.value;
    var SpanMan = 3.6;
    var SpanVelo = 20;
    var SpanCar = 70;
    var SpanAiroplan = 800;
    
    elSpanMan.textContent = Math.round(elInputVal / SpanMan);
    elSpanVelo.textContent = Math.round(elInputVal / SpanVelo);
    elSpanCar.textContent = Math.round(elInputVal / SpanCar);
    elSpanAiroplan.textContent = Math.round(elInputVal / SpanAiroplan);
    
})

