const express = require("express");
const bodyParser = require('body-parser');
const app = express();

process.on('uncaughtException', (ex) => {});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/generate", async (req, res) => {
	const { positive, negative, service } = req.body;
	if(positive == '' && negative == '' || !service) {
		res.sendStatus(400);
		return;
	};
	delete req.body.service;

	const generate = require("./services/" + service.toLowerCase() + ".js");

	const images = await generate(req.body);

	res.send(images);
});

app.get("/", (req, res) => {
	return res.sendFile("./routing/index.html", {
        root: '.'
    });
});

app.listen(9001);