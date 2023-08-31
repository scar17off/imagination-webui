const axios = require("axios");

async function generate(options) {
	const data = {
	    "width": parseInt(options.width) || 512,
	    "height": parseInt(options.height) || 512,
	    "amount": parseInt(options.amount) || 2,
	    "prompt": [
	        {
	            "text": options.positive || '',
	            "weight": 0.5
	        },
	        {
	            "text": options.negative || '',
	            "weight": -1
	        }
	    ]
	};
	
	const request = await axios.post("https://pixlr.com/api/openai/generate", data);

	return request.data.data;
};

module.exports = generate;