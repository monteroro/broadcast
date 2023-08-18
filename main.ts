radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.setVolume(200)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
    if (receivedNumber == 2) {
        music.setVolume(200)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Square)
            basic.showIcon(IconNames.SmallSquare)
        }
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 3) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(2)
