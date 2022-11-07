const path = require('path');
const fs = require('fs');
const text = path.join(__dirname, 'text.txt');

const stream = fs.createReadStream(text, 'utf-8');

stream.on('data', data => console.log(data));
 
stream.on('error', error => console.log('Error:', error.message));
