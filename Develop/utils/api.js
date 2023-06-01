const axios = require("axios");

const api = {
    async getUser(userResponses) {
        try { 
           let responses = await axios.get("https://api.github.com/users/Franko88Bit");
           return responses.data;
        }  catch (error)  {
            console.log(error);

        }
    }
};

module.exports = api;