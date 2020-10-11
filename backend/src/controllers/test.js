const router = require('express').Router();

router.get('/routetest', (req, res) => {
	res.status(200).json({msg:"Successful API Call"});
})

module.exports = router;
