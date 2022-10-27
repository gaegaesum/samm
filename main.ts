let X = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    while (X <= 5) {
        led.plot(X, 0)
        basic.pause(100)
        basic.clearScreen()
        X += 1
    }
})
