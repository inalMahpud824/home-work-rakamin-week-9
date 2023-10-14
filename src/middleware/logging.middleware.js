const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logDirectory = path.join(__dirname, '../../logging');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

const logFileName = 'access.log';

const logFilePath = path.join(logDirectory, logFileName);

const accessLogStream = fs.createWriteStream(logFilePath, { flags: 'a' });

const morganMiddleware = morgan('combined', { stream: accessLogStream });

module.exports = morganMiddleware;
