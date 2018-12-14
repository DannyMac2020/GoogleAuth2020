const axios = require('axios');

module.exports = app => {
  app.get('/api/channels', async (req, res) => {
    if (!req.user) {
      res.status(403).send({ error: 'You must be logged in to do that.' });
    }

    try {
      const ytRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?access_token=${
          req.user.googleAccessToken
        }&part=snippet&mine=true`
      );
      res.send(ytRes.data);
    } catch (e) {
      console.log(e);
      console.log(e.message);
    }
  });
};
