("use strict");
const http = require("https");

const myRequest = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const { statusCode } = res;
      let error;
      if (statusCode !== 200) {
        error = new Error("Somthing Went Wrong!");
        reject(error);
      }
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res
        .on("end", () => {
          try {
            const finalData = JSON.parse(data);
            resolve({ statusCode, body: finalData });
            console.log(finalData);
          } catch (e) {
            reject(e);
          }
        })
        .on("error", (e) => {
          reject(e);
        });
    });
  });
};

module.exports = myRequest;
