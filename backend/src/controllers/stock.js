// Made 10/12/20
// Controller relating to stock data (unsure yet if local info or finnhub data calls)
const router = require('express').Router();

router.post('/getUserStocks', (req, res) => {
	
	
	const dummyStocks = [
		{ symbol: 'ATX', qty: 100, lastPrice: 5 },
		{ symbol: 'DUB', qty: 200, lastPrice: 20 } 
		];
	const dummyRetData = {  
		stocks: dummyStocks,
		msg: "Successful Stonk Retrieval"};
	res.status(200).json(dummyRetData);
});
module.exports = router;
