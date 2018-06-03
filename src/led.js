let five = require('johnny-five') 							//llamando la libreria
// const {Board, Led} = require('johnny-five')	//llamando la libreria

let myBoard = new five.Board() //instanciando la placa (Arduino UNO) automaticamente

myBoard.on('ready', function (){ //constructor
	let myLed = new five.Led(13) //instanciando el pin del led

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