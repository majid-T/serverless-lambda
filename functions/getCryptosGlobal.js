//Coin Gecko API call for endpoint https://api.coingecko.com/api/v3/global
const axios = require('axios');

module.exports.handler = async function (event, context, callback) {
    //Making sure just GET methods are processed by our function
    if (event.httpMethod === "GET") {
        const response = await axios.get("https://api.coingecko.com/api/v3/global");
        const responseObjext = { statusCode: 200, body: JSON.stringify(response.data) };
        callback(null, responseObjext);
    } else {
        const reqMethod = event.httpMethod;
        callback(null, { statusCode: 405, body: JSON.stringify({ errMsg: `The ${reqMethod} http method is not supported on this function` }) })
    }

}