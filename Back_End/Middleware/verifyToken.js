const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
	try {
		const token = req.headers?.authorization?.split(' ')[1];
		console.log(token);

		if (!token) {
			return res.status(401).json({
				status: 'Faild',
				message: 'Pleace login again.',
			});
		}

		const decoded = await promisify(jwt.verify)(
			token,
			process.env.TOKEN_SECRET
		);

		req.user = decoded;
		next();
	} catch (error) {
		res.status(500).json({
			status: 'Faild',
			error: error.message,
		});
	}
};
