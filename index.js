
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;
const port = process.env.PORT || 8443;
const host = process.env.HOST;
const url = `https://dry-eyrie-81555.herokuapp.com:/${token}`;
const config = {
  webHook: { port, host },
};
const bot = new TelegramBot(token, config);
bot.setWebHook(url);

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  console.log(msg);

  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});