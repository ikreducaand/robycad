pins.servoSetPulse(AnalogPin.P1, 1500)
pins.servoWritePin(AnalogPin.P1, 0)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 55) {
        maqueen.motorStop(maqueen.Motors.All)
        pins.servoWritePin(AnalogPin.P0, 100)
    }
})
