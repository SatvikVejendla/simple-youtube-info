//const video = require("./src/search/video.js");
const verify = require("./src/verify/verify.js");

var APIKEY = 0;

exports.verify = function (key) {
  APIKEY = key;
  verify.verify(key);
};

const fetch = require("node-fetch");
async function video(q, maxResults, order) {
  if (APIKEY == 0) {
    console.log("Oops! Look like you forgot to enter your API key.");
    return;
  }
  maxResults = maxResults || 5;
  order = order || "relevance";
  let result = await fetch(
    "https://www.googleapis.com/youtube/v3/search?key=" +
      APIKEY +
      "&q=" +
      q +
      "&order=" +
      order +
      "&maxResults=" +
      maxResults +
      "&type=video"
  )
    .then((res) => res.json())
    .then((body) => {
      return body;
    });
  return result;
}

async function channel(q, maxResults, order) {
  if (APIKEY == 0) {
    console.log("Oops! Look like you forgot to enter your API key.");
    return;
  }
  maxResults = maxResults || 5;
  order = order || "relevance";
  let result = await fetch(
    "https://www.googleapis.com/youtube/v3/search?key=" +
      APIKEY +
      "&q=" +
      q +
      "&order=" +
      order +
      "&maxResults=" +
      maxResults +
      "&type=channel"
  )
    .then((res) => res.json())
    .then((body) => {
      return body;
    });
  return result;
}

async function playlist(q, maxResults, order) {
  if (APIKEY == 0) {
    console.log("Oops! Look like you forgot to enter your API key.");
    return;
  }
  maxResults = maxResults || 5;
  order = order || "relevance";
  let result = await fetch(
    "https://www.googleapis.com/youtube/v3/search?key=" +
      APIKEY +
      "&q=" +
      q +
      "&order=" +
      order +
      "&maxResults=" +
      maxResults +
      "&type=playlist"
  )
    .then((res) => res.json())
    .then((body) => {
      return body;
    });
  return result;
}

exports.video = video;
exports.channel = channel;
exports.playlist = playlist;
