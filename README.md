# YouTubeLiveChat
NodeJS app to get chat messages from a live stream on YouTube. 

To run:

<code>node livechat.js --id [livestreamid]</code>

This will get the LiveChatID from Youtube, where [livestreamid] is the ID that can be found in the YouTube video url: https://www.youtube.com/watch?v=[thisisthelivestreamid]. 

Use:

<code>node livechat.js --messages [livechatid]</code> 

To print out all the chat messages. Where [livechatid] the previously obtained LiveChatID.

# NodeJS

Node.js is an open-source cross-platform JavaScript run-time environment. To install NodeJS:

<code>sudo apt install nodejs</code>

This will install both NodeJs and the npm package manager.

# secret.json
This is where your GoogleAPI API-key lives.

# node-fetch
node-fetch is a required module. After cloning, install using <code>npm install node-fetch</code>
