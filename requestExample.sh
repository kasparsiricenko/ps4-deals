curl 'https://web.np.playstation.com/api/graphql/v1//op?operationName=categoryGridRetrieve&variables=%7B%22id%22%3A%22803cee19-e5a1-4d59-a463-0b6b2701bf7c%22%2C%22pageArgs%22%3A%7B%22size%22%3A800%2C%22offset%22%3A0%7D%2C%22sortBy%22%3A%7B%22name%22%3A%22default%22%2C%22isAscending%22%3Atrue%7D%2C%22filterBy%22%3A%5B%5D%2C%22facetOptions%22%3A%5B%5D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2217f6ef895587b3003ea3c992eb7f1983bc15535ea98b7be92e449f0343930cb0%22%7D%7D' \
  -H 'authority: web.np.playstation.com' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"' \
  -H 'x-psn-request-id: 93a13617-7ce4-4188-aeef-58642c545dc4' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-psn-app-ver: @sie-ppr-web-store/app/@sie-ppr-web-store/app@0.51.0-1-g74f7047f-74f7047f39ccb59a9d9afc6d52d011641697778c' \
  -H 'x-psn-correlation-id: 56475b4f-d4c4-4119-b79b-b4503f873f6b' \
  -H 'x-psn-store-locale-override: en-IE' \
  -H 'origin: https://store.playstation.com' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://store.playstation.com/' \
  -H 'accept-language: en-GB,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,ru-RU;q=0.6,ru;q=0.5,en-US;q=0.4,zh-CN;q=0.3,zh;q=0.2' \
  -o dataProducts.json