const axios = require("axios");
const FormData = require('form-data');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function generate(options) {
	const form = new FormData();
	form.append('seedValue', getRandomInt(1, 20000));
	form.append('negativePrompt', options.negative);
	form.append('negativePromptMode', 'append');
	form.append('inputText', options.positive);
	form.append('width', '512');
	form.append('height', '512');
	form.append('styleId', '140');
	form.append('styleLabel', 'Hotpot Art 9');
	form.append('isPrivate', 'false');
	form.append('requestId', '8-' + form._boundary);
	form.append('resultUrl', 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-' + form._boundary + '.png');
	
	const request = await axios.post("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", form, {
	  headers: {
	    Authorization: 'hotpot-temp9n88MmVw8uaDzmoBq',
	    'Content-Type': `multipart/form-data; boundary=${form._boundary}`
	  }
	});

	return [request.data];
};

module.exports = generate;