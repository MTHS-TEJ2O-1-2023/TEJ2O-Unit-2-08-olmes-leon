/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Leon
 * Created on: Oct 18 2023
 * This program run the colors of the RGB LEDs
*/

// 16 = Blue
// 15 = Green
// 14 = Red

input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    basic.showString("Blue")
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(1000)
    basic.showString("Green")
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)
    basic.showString("Red")
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    basic.showString("Cyan")
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)
    basic.showString("Yellow")
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    basic.showString("Purple")
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
