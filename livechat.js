const secret = require('./secret.json');
const fetch = require('node-fetch');

var arguments = process.argv;

async function getChatId(id) {
  try {
    var res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&key=${secret.apiKey}&id=${id}`
    );

    var data = await res.json();

    if (!data.error) {
      if (!data.items.length == 0) {
        let livechatid = data.items[0].liveStreamingDetails.activeLiveChatId;
        console.log(livechatid);
      } else {
        error = 'LiveStream not found.';
        throw error;
      }
    } else {
      error = data.error.code + ': ' + data.error.errors[0].reason;
      throw error;
    }
  } catch {
    console.log('Oops! ' + error);
  }
}

async function getChatMessages(chatid) {
  try {
    var res = await fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?part=id%2C%20snippet&key=${secret.apiKey}&liveChatId=${chatid}`
    );

    var data = await res.json();

    if (!data.error) {
      if (!data.items.length == 0) {
        for (var i = 0; i < data.items.length; i++) {
          console.log(data.items[i].snippet.displayMessage);
        }
        console.log(' -- ' + i + ' messages returned --')
      } else {
        error = 'No messages.';
        throw error;
      }
    } else {
      error = data.error.code + ': ' + data.error.errors[0].reason;
      throw error;
    }
  } catch (error) {
    console.log('Oops! ' + error);
  }
}

if (secret.apiKey == 'YourAPIKey') {
  console.log('Seems you haven\'t supplied your API Key yet!');
  return;
}

switch (arguments[2]) {
  case '--id':
    getChatId(arguments[3]);
    break;
  case '--messages':
    getChatMessages(arguments[3]);
    break;
  case '--help':
    console.log(`
Arguments:              Function:

--id [livestreamid]     Prints the LiveChatID for the given Live Stream.
                        The LiveStreamID is found in the URL of the LiveStream:
                        http://www.youtube.com/watch?v=[thisisthelivestreamid].

--messages [livechatid] Prints the chat messages for the given LiveChat.
        `);
    break;
  default:
    console.log(
      'No Valid Argument(s) Passed. Use --help to see valid arguments.'
    );
}
