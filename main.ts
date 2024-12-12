input.onButtonPressed(Button.A, function () {
    esp8266.sendTelegramMessage("8072836824:AAFk-rycrsq79C3ZYxuWngwVzoIFtICfnBk", "-4672732933", "Test")
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
esp8266.connectWiFi("LIB-0243726", "y7nCvjnshmzp")
basic.showString("Connect")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Confused)
}
basic.forever(function () {
	
})
