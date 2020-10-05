//Coin Gecko API call for endpoint https://api.coingecko.com/api/v3/global
module.exports.handler = function (event, context, callback) {
    const responseObjext = { statusCode: 200, body: "Hello world!" };
    callback(null, responseObjext);
}