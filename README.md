# YouTubeLiveChat

NodeJS app to get chat messages from a live stream on YouTube. To get the chat messages from a live stream on YouTube, two steps are required. The first step is to get the LiveChatId. The second step is to get the messages using that LiveChatId. Unfortunately these are two different API's. The `--id` argument calls the <code>`https://www.googleapis.com/youtube/v3/videos`</code> API with two parameters: <b>&id</b> calls for a specific video (in this case a live stream) and <b>&part</b> with the part name set to <b>liveStreamingDetails</b> returns some properties of that video. We are interested in the <b>activeLiveChatId</b>.

The next API call that needs to be made is to <code>`https://www.googleapis.com/youtube/v3/liveChat/messages`</code>. This is done with the `--messages` argument. Again two parameters are added: <b>&part</b> has two values: <b>id</b> and <b>snippet</b>. The value of <b>&liveChatId</b> is the previously obtained <b>activeLiveChatId</b>. The call to this API returns live chat messages for the specified live stream. The messages live in `items[].snippet.displayMessage`.

Both API calls also need <b>&key</b>. A (limited) free Google API key can be obtained from https://console.cloud.google.com, creating a Project, adding an API to that Project and then creating an API key for that Project. In this app you need to add your API key to <code>sercet.json</code> under <b>"apiKey:"</b>.

# Quick Use Guide

Use:

<code>node livechat.js --id [livestreamid]</code>


To get the LiveChatID from Youtube, where [livestreamid] is the ID that can be found in the YouTube video url: <code>`https://www.youtube.com/watch?v=[thisisthelivestreamid]`</code>.

Use:

<code>node livechat.js --messages [livechatid]</code>

To print out all the chat messages. Where [livechatid] the previously obtained LiveChatID.

# NodeJS + npm

Node.js is an open-source cross-platform JavaScript run-time environment. To install NodeJS:

<code>sudo apt install nodejs</code> -or- download from https://nodejs.org/en/

npm is a package manager used to add modules to NodeJS. To install npm:

<code>sudo apt install npm</code>

# secret.json

This is where your GoogleAPI API-key lives.

# node-fetch

node-fetch is a required module. After cloning, install using <code>npm install node-fetch</code>

# Documentation the Google API's

* https://developers.google.com/youtube/v3/docs/videos/list
* https://developers.google.com/youtube/v3/live/docs/liveChatMessages
