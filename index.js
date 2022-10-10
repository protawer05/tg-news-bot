const TelegramApi = require('node-telegram-bot-api');
const TOKEN = '5519177422:AAFlsdaCycUDajP9JDWlFrHbxDf3-cFqwNE';
const MY_ID = 1117285189;
const MOM_ID = 123123;
const bot = new TelegramApi(TOKEN, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        switch (text) {
            case '/start':
                await bot.sendMessage(chatId, 'Добро пожаловать в новостной канал города Стерлитамак');
                await bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H1c7vvaILDeycBqDnPJHGlBYWGUCZ9mo7A&usqp=CAU');
                const date = new Date().getMinutes();
                const endDate = 1 * 60 * 1000; // date + 1, где 1 это сколько надо прибавить минут
                setTimeout(() => {bot.sendMessage(chatId, `сейчас ${date} минут, бот отправит сообщение в ${date + 1}`)}, 1)
                await bot.sendMessage(chatId, `миллисекунд: ${endDate}`)
                setTimeout(async () => {
                    await bot.sendMessage(chatId, `сейчас ${date} минут, в стерлитамаке.......`)
                    await bot.sendVideo(chatId, 'blob:https://www.youtube.com/3a4e04f1-cc0c-49f5-b63d-bf8d57add81a')
                }, endDate)
                break;
            default:
                return bot.sendMessage(chatId, `Данный бот не принимает сообщения"`);
        }
    })
}
start()

//case '/me':
//                 await bot.sendMessage(chatId, `Твой ник ${msg.from.first_name}`);
//                 await bot.sendMessage(chatId, 'Проверка на бота...');
//                 setTimeout(() => bot.sendMessage(chatId, !msg.from.is_bot ? 'Пройдена' : 'Не пройдена'), 3000)
//                 break;