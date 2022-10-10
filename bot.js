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
                const hours = new Date().getHours();
                const minutes = new Date().getMinutes();
                const time = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000)
                const oneDeadline = (20 * 60 * 60 * 1000) + (10 * 60 * 1000)
                const twoDeadline = (20 * 60 * 60 * 1000) + (13 * 60 * 1000)
                const threeDeadline = (20 * 60 * 60 * 1000) + (0 * 60 * 1000)
                const fourDeadline = (20 * 60 * 60 * 1000) + (5 * 60 * 1000)
                const fiveDeadline = (20 * 60 * 60 * 1000) + (7 * 60 * 1000)
                setTimeout(() => {
                    bot.sendMessage(chatId, `часы: ${hours}, минуты: ${minutes}, общее время(мс): ${time}, время до 20:10: ${oneDeadline - time}`)
                }, 1)
                setTimeout(() => {
                    bot.sendMessage(chatId, 'Сработал первый таймаут в 19:55')
                }, (twoDeadline - time))
                setTimeout(() => {
                    bot.sendMessage(chatId, 'Сработал первый таймаут в 20:00')
                }, (threeDeadline - time))
                setTimeout(() => {
                    bot.sendMessage(chatId, 'Сработал первый таймаут в 20:05')
                }, (fourDeadline - time))
                setTimeout(() => {
                    bot.sendMessage(chatId, 'Сработал первый таймаут в 20:07')
                }, (fiveDeadline - time))

                break;
            default:
                return bot.sendMessage(chatId, `Данный новостной канал не принимает сообщения`);
        }
    })
}
start()

//case '/me':
//                 await bot.sendMessage(chatId, `Твой ник ${msg.from.first_name}`);
//                 await bot.sendMessage(chatId, 'Проверка на бота...');
//                 setTimeout(() => bot.sendMessage(chatId, !msg.from.is_bot ? 'Пройдена' : 'Не пройдена'), 3000)
//                 break;