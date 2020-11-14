const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;
const appId = process.env.APP_ID;
const port = process.env.PORT  || 8443;
const host = process.env.HOST;
const url = `https://${appId}.herokuapp.com/${token}`;
const config = {
  webHook: { port, host },
};
const bot = new TelegramBot(token, config);
bot.setWebHook(url);

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  // console.log('message' msg);
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, `Hello ${msg.from.first_name}, I've received your message`);
});