//Dependencie
let five = require('johnny-five') //llamando la libreria

var myBoard = new five.Board() //instanciando la placa (Arduino UNO) automaticamente {port: '\\\\.\\COM4' }
var devices = {}

myBoard.on('ready', function (){ //constructor		
	devices.led = new five.Led(13) //instanciando el pin del led
	let myLed = devices.led
	console.log('Board is ready')

	this.repl.inject({ // permite el acceso mientras el programa esta corriendo
		myLed: myLed
	})	

	// this.on('exit', ()=>{ //se ejecuta antes de que el programa se "desconecte" de la placa
	// 	myLed.off()
	// })
})

myBoard.on('error', (error)=>{ //captura le error
	console.log(error)
})

	//controller on led
	exports.index = (req, res) => {	
		console.log('en index')
		res.render('index', {
			title:'arduino y johnny five'
		})
	}
	
	exports.onLed = (req, res) => {
		console.log('Led on')
		myBoard.isReady ? devices.led.on() : console.log("Board isn't conected")
		res.render('index', {
			title:'arduino y johnny five'
		})
	}
	
	exports.offLed = (req, res) => {
		console.log('Led off')
		myBoard.isReady ? devices.led.off() : console.log("Board isn't conected")	
		res.render('index', {
			title:'arduino y johnny five'
		})	
	}