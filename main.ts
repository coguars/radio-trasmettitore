touchbit.on(touchbit.TouchPad.b, touchbit.TouchEvent.pressed, function () {
    trasmetti("TI VOGLIO BENE!")
})
touchbit.on(touchbit.TouchPad.d, touchbit.TouchEvent.pressed, function () {
    trasmetti("BELO' ANA'")
})
function trasmetti (testo: string) {
    radio.sendString(testo)
    basic.pause(2000)
    basic.showString(testo)
}
touchbit.on(touchbit.TouchPad.c, touchbit.TouchEvent.pressed, function () {
    trasmetti("ANDEE!")
})
touchbit.on(touchbit.TouchPad.a, touchbit.TouchEvent.pressed, function () {
    trasmetti("CIAO!")
})
radio.setGroup(255)
