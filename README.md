# Simple-youtube-info

A simple node js module which makes it easier to search youtube using the Youtube API.


# Versions

Current Version: 1.5.5

Last Stable Version: 1.5.5


# Documentation

We all know how annoying it is to see a module that has virtually no documentation at all and expect you to understand and be able to use it. Well, this module helps make it easier for you to search youtube (useful for Discord bots) and return the results.


### Set up

First, run this command in the terminal to install the module.

```
npm install simple-youtube-info
```

Once you've done that, the package is installed and you can get to the actual code.

Type this following command to import the package.

```javascript
const youtube = require('simple-youtube-info');
```

All projects which use the Youtube API require the API Key. You can get an API key in the [Google Developer Console](https://console.developers.google.com/).

1. Once you're logged in, in the left of the screen, click "Library".
2. Seach "Youtube Data" and click on "Youtube Data API v3".
3. Click on "Enable" for the API and after that, click "manage".
4. At the left the screen, click "Credentials".
5. At the top of the screen, click "Create Credentials" and click "API KEY".
6. You now have your own API Key. Copy that and switch back over to your coding platform.


### Verify

Before you use any of the commands, you will need to pass in your API key as a parameter. Type this command in:

```javascript
youtube.verify("APIKEY");
```
and instead of "APIKEY", type in your actual API key that you just got.


# Search Commands

### Video

```javascript
youtube.video(keyword);
youtube.video(keyword, maxResults);
youtube.video(keyword, maxResults, order);
```

Parameters | What it is | Required
---------- | ---------- | --------
keyword | the keyword that you want to search Youtube for | yes
maxResults | the number of results you get. Default is 5 results | no
order | how you the results are ordered. "date", "rating", "relevance", "title", "viewCount" | no


Type of order | Description
------------- | -----------
date | Sorted by whicever video is newest
rating | Highest to lowest rating
relevance | Relevance to the search keyword
title | Alphabetically
viewCount | Highest views

### Channel

```javascript
youtube.channel(keyword);
youtube.channel(keyword, maxResults);
youtube.channel(keyword, maxResults, order);
```

The parameters are all the same as the video command with the exception of one. For channel, you can also choose to sort the order by videoCount, meaning that whichever channel has the most videos comes up first.

To do this, just write "videoCount" instead of order:

```javascript
youtube.channel(keyword, maxResults, "videoCount");
```

### Playlist

```javascript
youtube.channel(keyword);
youtube.channel(keyword, maxResults);
youtube.channel(keyword, maxResults, order);
```

The parameters are the same as the video.
