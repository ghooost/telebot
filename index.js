
const Telegraf = require('telegraf');
const bot = new Telegraf('AAERlp20WuutaPY4rY66-bJXQmn6N2ZnX8E')

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})

bot.on('text', (ctx) => ctx.reply('Hello World'))
bot.launch()