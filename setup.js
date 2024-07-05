const readline = require('readline');
const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("What's the project name in lower case with no spaces? ", (projectName) => {
	const projectPath = path.join(__dirname, '**', '*.*');
	const ignorePatterns = ['**/.angular/**', '**/node_modules/**']; // Patterns to ignore

	glob(projectPath, { nodir: true, ignore: ignorePatterns }, (err, files) => {
		if (err) {
			console.error('Error finding files:', err);
			return rl.close();
		}

		files.forEach(async (file) => {
			try {
				let content = await fs.readFile(file, 'utf8');
				const updatedContent = content.replace(/angular-base/g, projectName);
				if (content !== updatedContent) {
					await fs.writeFile(file, updatedContent, 'utf8');
					console.log(`Updated ${file}`);
				}
			} catch (error) {
				console.error(`Error processing ${file}:`, error);
			}
		});

		rl.close();
	});
});
