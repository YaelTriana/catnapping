let logging = fa
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Target)
        music.play(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})


loops.everyInterval(60000, function () {
    if (logging) {
        datalogger.log(
            datalogger.createCV("temp", input.temperature()),
            datalogger.createCV("light", input.lightLevel())
        )
    }
})