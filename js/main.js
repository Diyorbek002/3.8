var SpanMan = 3.6;

var SpanVelo = 20;

var SpanCar = 70;

var SpanAiroplan = 800;

var elForm = document.querySelector(".header__form")

var elInput = document.querySelector(".header__input")

var elSpanMan = document.querySelector(".box__man")

var elSpanVelo = document.querySelector(".box__velo")

var elSpanCar = document.querySelector(".box__car")

var elSpanAiroplan = document.querySelector(".box__airoplan")

var elSpan = document.querySelector(".header__span")

elForm.addEventListener("submit" , function (evt){
        evt.preventDefault()

var elInputVal = Number(elInput.value.trim());
        function man () {
        var hour = Math.floor (elInputVal / SpanMan);
        var minut = Math.floor( (elInputVal / SpanMan - hour )*60);
        return hour + " soat" + minut + "minut"}

        function velo () {
        var hour = Math.floor (elInputVal / SpanVelo);
        var minut = Math.floor( (elInputVal / SpanVelo - hour )*60);
        return hour + " soat" + minut + "minut"}

        function car () {
        var hour = Math.floor (elInputVal / SpanCar);
        var minut = Math.floor( (elInputVal / SpanCar - hour )*60);
        return hour + " soat" + minut + "minut"}

        function airoplan () {
        var hour = Math.floor (elInputVal / SpanAiroplan);
        var minut = Math.floor( (elInputVal / SpanAiroplan - hour )*60);
        return hour + " soat" + minut + "minut"

}
                
    elSpanMan.textContent = man()
    elSpanVelo.textContent = velo()
    elSpanCar.textContent = car()
    elSpanAiroplan.textContent = airoplan()
 })

