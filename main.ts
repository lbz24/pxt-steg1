function leds () {
	
}
input.onButtonPressed(Button.A, function () {
    cryptsteg.showImage(Images.Crown)
})
input.onButtonPressed(Button.B, function () {
    cryptsteg.showNextImage()
})
cryptsteg.clearDisplay()
