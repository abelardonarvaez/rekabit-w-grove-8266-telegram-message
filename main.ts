input.onButtonPressed(Button.A, function () {
    esp8266.sendTelegramMessage("", "", "Test")
    if (esp8266.isTelegramMessageSent()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
basic.showString("Init")
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
esp8266.connectWiFi("", "")
basic.showString("Connect")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Confused)
}
basic.forever(function () {
	
})
