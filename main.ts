input.onButtonPressed(Button.A, function () {
    cryptsteg.showNextStegImage()
})
input.onButtonPressed(Button.AB, function () {
    cryptsteg.resetAllImages()
})
input.onButtonPressed(Button.B, function () {
    cryptsteg.clearDisplay()
})
cryptsteg.showStegImg(Images.Heart)
