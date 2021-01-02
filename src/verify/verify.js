var fetch = require("node-fetch");

async function verify(key) {
  let result = fetch("https://www.googleapis.com/youtube/v3/search?key=" + key)
    .then((res) => res.json())
    .then((body) => {
      if (body.error) {
        console.log(body.error);
      }
    });
}

exports.verify = verify;
