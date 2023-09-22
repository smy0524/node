const fs = require('fs');
const process = require('process');
const path = require('path');

const thisFile = __dirname;
const videoFile = path.join(thisFile, 'video');
const imgFile = path.join(thisFile, 'img');

if (!fs.existsSync(videoFile)) fs.mkdirSync(videoFile);
if (!fs.existsSync(imgFile)) fs.mkdirSync(imgFile);