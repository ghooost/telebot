
const TelegramBot = require('node-telegram-bot-api');
const { dockStart } = require('@nlpjs/basic');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;
const appId = process.env.APP_ID;
const port = process.env.PORT || 8443;
const host = process.env.HOST;
const url = `https://${appId}.herokuapp.com/${token}`;

const bot = new TelegramBot(token, { webHook: { port, host } });
bot.setWebHook(url);

(async () => {
  const dock = await dockStart({ use: ['Basic'] });
  const nlp = dock.get('nlp');
  await nlp.addCorpus('./corpus.json');
  await nlp.train();

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', (msg) => {
    //console.log('message', msg);
    const chatId = msg.chat.id;

    nlp.process('en', msg.text).then((response) => {
      //console.log(response);
      // send a message to the chat acknowledging receipt of their message
      // bot.sendMessage(chatId, `Hello ${msg.from.first_name}, I've received your message`);
      bot.sendMessage(chatId, response.answer);
    });

  });
})();
