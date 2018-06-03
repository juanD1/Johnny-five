let express = require('express')
let led = express.Router()
let ledController = require('../controllers/led')

//routes
led.route('/')
	.get(ledController.index)
	
led.route('/on')
	.get(ledController.onLed)

led.route('/off')
	.get(ledController.offLed)

module.exports = led