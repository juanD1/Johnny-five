let five = require('johnny-five')
// const {Board, Led} = require('johnny-five')

let myBoard = new five.Board()

myBoard.on('ready', function (){
	let myLed = new five.Led(13)
	// myLed.strobe()
	this.repl.inject({
		myLed: myLed
	})	
})

myBoard.on('error', (error)=>{
	console.log(error)
})