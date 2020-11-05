const Telegraf = require('telegraf');
const app = new Telegraf('AAERlp20WuutaPY4rY66-bJXQmn6N2ZnX8E');

app.hears('hi', ctx => {
  return ctx.reply('Hey!');
});

app.startPolling();