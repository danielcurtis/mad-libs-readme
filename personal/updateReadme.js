// Include node file system module
const fs = require('fs');
// Include node https system module
const https = require('https');

// URL API endpoint
const url = 'https://dev.to/api/articles?username=curtiscodes';

// Update README
function updateMarkdown(articles) {
	fs.readFile('README.md', 'utf-8', (err, data) => {
		if (err) throw err;

		// Regex parses README for "DEV Articles: - [mad-libs"
		// Regex101.com
		const updatedMd = data.replace(
			/(?<=DEV Articles:\n)[\s\S]*(?=\[mad-libs)/gim,
			articles
		);

		fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
			if (err) throw err;
			console.log('README update complete.');
		});
	});
}

// Get Articles
function getArticles() {
	https.get(url, (res) => {
		res.setEncoding('utf8');
		let body = '';
		res.on('data', (data) => (body += data));
		res.on('end', () => {
			body = JSON.parse(body);
			// Get 3 articles
			body = body.slice(0, 3);
			// Create markdown
			const articles = `\n - [${body[0].title}](${body[0].url})\n - [${body[1].title}](${body[1].url})\n \n`;

			updateMarkdown(articles);
		});
	});
}

getArticles();
