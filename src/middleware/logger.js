const {finished} = require('stream');

const processErrorLogger = (obj, text) => console.log(text, obj.message);

const errorLogger = (code, message) => console.log(`ERROR ${code} ${message}`);

const requestLogger = (req, res, next) => {
    const {method, url, query, body} = req;
    const start = Date.now(); 
    next();
  
    finished(res, () => {
      const ms = Date.now() - start;
      const {statusCode} = res;
      console.log(`${method} ${statusCode} URL: ${url} Query: ${JSON.stringify(query)} Body: ${JSON.stringify(body)} [${ms}ms]`);
    })
  };
  
  module.exports = {
    processErrorLogger,
    requestLogger,
    errorLogger
  };