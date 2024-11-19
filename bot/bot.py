from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackContext

TOKEN = ''  # Вставьте сюда ваш токен от BotFather

# Функция для команды /start
async def start(update: Update, context: CallbackContext):
    keyboard = [[InlineKeyboardButton("Открыть мини-приложение", web_app={"url":"https://www.ya.ru"})]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Нажмите кнопку ниже, чтобы открыть мини-приложение:', reply_markup=reply_markup)

# Запуск бота
if __name__ == '__main__':
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()
