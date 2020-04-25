# YouTubeLiveChat
NodeJS app to get chat messages from a live stream on YouTube. To run <code>node livechat.js --id [livestreamid]</code> to get the LiveChatID from Youtube, where [livestreamid] is the ID that can be found in the YouTube video url: https://www.youtube.com/watch?v=[thisisthelivestreamid]. Using <code>node livechat.js --messages [livechatid]</code> where [livechatid] the previously obtained LiveChatID, prints out all the chat messages.

# secret.json
This is where your GoogleAPI API-key lives.

# node-fetch
node-fetch is a required module. After cloning, install using <code>npm install node-fetch</code>
