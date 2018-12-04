if (process.env.NODE_ENV === 'production') {
  moudle.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
