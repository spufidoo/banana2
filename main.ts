let sound = music.noteFrequency(Note.A);

input.onPinPressed(TouchPin.P1, () => {
    for (let i = 0; i < 4; i++) {
        music.playTone(sound, music.beat(BeatFraction.Quarter));
        sound += 25;
    }
    sound = music.noteFrequency(Note.A);
});

input.onPinPressed(TouchPin.P2, () => {
    for (let i = 0; i < 4; i++) {
        music.playTone(sound, music.beat(BeatFraction.Quarter));
        sound += -25;
    }
    sound = music.noteFrequency(Note.A);
});