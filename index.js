require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

// Discord Token (set through a .env file)
const TOKEN = '(YOUR_API_TOKEN)'

// Creating a new client
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// Pasting the URL for the .GIF images to be shared into the discord server
const randomGif = [
  `https://www.icegif.com/wp-content/uploads/icegif-2013.gif`,
  `https://c.tenor.com/rnhV3fu39f8AAAAM/eating-anime.gif`,
  `https://i.kym-cdn.com/photos/images/newsfeed/001/052/958/ddd.gif`,
  `https://c.tenor.com/rnhV3fu39f8AAAAM/eating-anime.gif`,
  `https://c.tenor.com/KO6BR15mTv0AAAAC/anime.gif`,
  `https://c.tenor.com/mKTS5nbF1zcAAAAM/cute-anime-dancing.gif`,
  `https://c.tenor.com/AdaSVzqCxLIAAAAC/yugioh-anime.gif`,
  `https://data.whicdn.com/images/252588371/original.gif`,
  `https://i.gifer.com/origin/a0/a0670ea327ab388eb2d5c5cf9a28796f.gif`,
  `https://data.whicdn.com/images/160129414/original.gif`,
  `https://i.pinimg.com/originals/1a/31/57/1a3157cbb7154ed1e5a6c30fe6f553a1.gif`,
  `https://tenor.com/view/sus-tohru-tohru-sus-sus-tohru-sussy-baka-gif-23526587`,
  `https://i.pinimg.com/originals/e9/68/63/e968632456e5d02b955e221ce90288f3.gif`,
  `https://i.pinimg.com/originals/03/44/f0/0344f0f1f8f51578869e15054a3cb125.gif`,
  `https://i.pinimg.com/originals/44/77/5a/44775af0c558a303b682bd26fbd4f22c.gif`,
  `https://giphy.com/gifs/snk-eren-jaeger-FPYsmg9ah8h3O`
]

const meme = [
  `https://tenor.com/view/lizard-dance-dance-move-hands-up-raise-em-up-gif-15829210`,
  `https://giphy.com/gifs/marvel-cinematic-universe-mcu-pietro-maximoff-yr7n0u3qzO9nG`
]

// Pasting a text to be sent to a channel
const helloWorld = `Hello World!`
const bruh = `Bruh`

client.on('ready', async msg => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch (msg.content) {
    case '.hello':
      msg.reply(helloWorld);
      break;
    case '.bruh':
      msg.reply(bruh);
      break;
    case '.randomgif':
      const r = Math.floor(Math.random() * (randomGif.length));
      msg.channel.send(randomGif[r]);
      break;
    case '.randommeme':
      const m = Math.floor(Math.random() * (meme.length));
      msg.channel.send(meme[m]);
      break;
    case '.ping':
      const timeTaken = Date.now() - message.createdTimestamp;
      msg.reply(`Ping! This message had a latency of ${timeTaken}ms.`);
      break;
  }
});

//make sure this line is the last line
client.login(TOKEN); //login bot using token
