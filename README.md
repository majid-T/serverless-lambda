# serverless-lambda

Exploring the serverless domain using AWS Lambda

## 3d party API [coingecko](https://www.coingecko.com)

endpoints details:

| HTTP Method | path                                    | input | output             |
| ----------- | --------------------------------------- | ----- | ------------------ |
| GET         | https://api.coingecko.com/api/v3/global | none  | success 200 / fail |

JSON response

```json
{
  "data": {
    "active_cryptocurrencies": 5916,
    "upcoming_icos": 0,
    "ongoing_icos": 52,
    "ended_icos": 3373,
    "markets": 537,
    "total_market_cap": {
      "btc": 32054265.079895787,
      "eth": 995049529.5814726,
      "ltc": 7431711588.968207,
      "bch": 1473981921.828357,
      "bnb": 12509958938.802944,
      "eos": 133700644270.6908,
      "xrp": 1389003507084.5125,
        ...

    },
    "total_volume": {
      "btc": 4641778.0930431895,
      "eth": 144093121.34880576,
      "ltc": 1076186147.5065823,
      "bch": 213447320.57437676,
      "bnb": 1811567140.9801083,
      "eos": 19361190158.457085,
      "xrp": 201141596423.27423,
      ...
    },
    "market_cap_percentage": {
      "btc": 57.751603217635484,
      "eth": 11.349085947807188,
      "usdt": 4.467585569617254,
      "xrp": 3.25141341952186,
      "bch": 1.2577773687205762,
      "bnb": 1.1821255476813726,
      "dot": 1.0697241348541553,
      "link": 1.0558958604224902,
      "cro": 0.8845516416772531,
      "ltc": 0.8830671847403904
    },
    "market_cap_change_percentage_24h_usd": 2.5931676477111703,
    "updated_at": 1602215456
  }
}
```
