//controller on led
exports.index = (req, res) => {	
	res.render('index', {
		title:'arduino y johnny five'
	})
}

exports.onLed = (req, res) => {	
	res.render('index', {
		title:'arduino y johnny five'
	})
}

exports.offLed = (req, res) => {	
	res.render('index', {		
		title:'arduino y johnny five'
	})	
}