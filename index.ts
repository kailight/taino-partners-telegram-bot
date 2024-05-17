import { Bot, InlineKeyboard } from "grammy";

// https://core.telegram.org/bots/api
// https://t.me/taino_partners_bot
// 6759620661:AAEOllBGU7xHBQgIy-7b0wDVcZ808miaO98

//Store bot screaming status
let status = "Awaiting orders";

//Create a new bot
const bot = new Bot("6759620661:AAEOllBGU7xHBQgIy-7b0wDVcZ808miaO98");



//This function handles the /scream command
// bot.command("status", () => {
//      "status";
// });

//This function handles /whisper command

//Pre-assign menu text
const firstMenu = "<b>Status</b>\n\nGet status.";

//Pre-assign button text
const nextButton = "Next";
const backButton = "Back";
// const tutorialButton = "Tutorial";

//Build keyboards
const firstMenuMarkup = new InlineKeyboard().text(nextButton, nextButton);

// const secondMenuMarkup = new InlineKeyboard().text(backButton, backButton).text(tutorialButton, "https://core.telegram.org/bots/tutorial");


//This handler sends a menu with the inline buttons we pre-assigned above
bot.command("menu", async (ctx) => {
    await ctx.reply(firstMenu, {
        parse_mode: "HTML",
        reply_markup: firstMenuMarkup,
    });
});

//This handler processes back button on the menu
/*
bot.callbackQuery(backButton, async (ctx) => {
    //Update message content with corresponding menu section
    await ctx.editMessageText(firstMenu, {
        reply_markup: firstMenuMarkup,
        parse_mode: "HTML",
    });
});
*/

//This handler processes next button on the menu
/*
bot.callbackQuery(nextButton, async (ctx) => {
    //Update message content with corresponding menu section
    await ctx.editMessageText(secondMenu, {
        reply_markup: secondMenuMarkup,
        parse_mode: "HTML",
    });
});
*/

//This function would be added to the dispatcher as a handler for messages coming from the Bot API
bot.on("message", async (ctx) => {

    // Print to console
    console.log(
        `${ctx.from.first_name} wrote ${
            "text" in ctx.message ? ctx.message.text : ""
        }`,
    );

    await ctx.reply(status, {
      entities: ctx.message.entities
    })

    //This is equivalent to forwarding, without the sender's name
    // await ctx.copyMessage(ctx.message.chat.id);

});

//Start the Bot
bot.start();

console.log('It works.');
