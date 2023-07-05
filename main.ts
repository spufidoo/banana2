input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(sound, music.beat(BeatFraction.Quarter))
        sound += 25
    }
    sound = 440
})
let sound = 0
sound = 440
