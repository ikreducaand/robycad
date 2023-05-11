let strip: neopixel.Strip = null
pins.servoSetPulse(AnalogPin.P1, 1500)
pins.servoWritePin(AnalogPin.P1, 94)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 55) {
        maqueen.motorStop(maqueen.Motors.All)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
    } else {
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P1, 103)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
control.inBackground(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(100)
})
