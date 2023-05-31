const axios = require("axios");

const api = {
    async getUser(userResponses) {
        try { let responses = await axios
        
        
      // Sample URL: https://api.github.com/users/FrankO88Bit-dev
           .get(`https://api.github.com/users/${userResponses.username}`);
           return responses.data;

        }  catch (error)  {console.log(error);

        }
    }
};

module.exports = api;