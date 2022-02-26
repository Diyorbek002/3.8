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

    function man () {
            return elInputVal / SpanMan
    }

    function velo () {
            return elInputVal / SpanVelo
    }
    
    function car () {
            return elInputVal / SpanCar
    }
    
    function airoplan () {
            return elInputVal / SpanAiroplan
    }
    
    elSpanMan.textContent = man().toFixed(2)
    elSpanVelo.textContent = velo().toFixed(2)
    elSpanCar.textContent = car().toFixed(2)
    elSpanAiroplan.textContent =airoplan().toFixed(2)
    
})

