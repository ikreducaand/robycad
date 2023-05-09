pins.servoSetPulse(AnalogPin.P1, 1500)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 55) {
        maqueen.motorStop(maqueen.Motors.All)
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(2000)
    } else {
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P1, 0)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
