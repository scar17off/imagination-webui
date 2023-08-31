const axios = require("axios");

async function generate(options) {
	const request = await axios.post("https://freeimagegenerator.com/queries/queryCreateAIImagesFromTextPrompt.php?server=1", `action=createAIImages&returnUrl=/&searchType=aiPrompt&aiPrompt=${options.positive}&numPerPage=12&currentPage=1`);

	const imageDatas = request.data.aiImageData;
	const images = [];

	imageDatas.forEach(item => {
		images.push(item.images[0].url);
	});

	return images;
};

module.exports = generate;