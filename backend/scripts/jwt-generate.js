const fs = require('fs');
const crypto = require('crypto');

function generateSecret() {
    const bytes = crypto.randomBytes(64);
    const secret = bytes.toString('hex');

    return secret;
}

function runScript() {
    const filePath = '.env';
    let content = fs.readFileSync(filePath, { encoding: 'utf-8' });

    const lines = content.split('\n');
    const secretKeys = ['ACCESS_TOKEN_SECRET='];

    for (let i=0; i<lines.length; i++) {
        const line = lines[i];
        const prefix = secretKeys.find((value) => line.startsWith(value));

        if (!prefix) {
            continue;
        }

        const secret = generateSecret();
        lines[i] = prefix + secret;
    }

    content = lines.join('\n');
    fs.writeFileSync(filePath, content, { encoding: 'utf-8' });
}

runScript();