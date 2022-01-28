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
  `https://i.kym-cdn.com/photos/images/newsfeed/001/052/958/ddd.gif`
]

// Pasting a text to be sent to a channel
const helloWorld = `Hello World!`

client.on('ready', async msg => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch (msg.content) {
    case '.hello':
      msg.reply(helloWorld);
      break;
    case '.randomgif':
      const r = Math.floor(Math.random() * (randomGif.length));
      msg.channel.send(randomGif[r]);
      break;
  }
});

//make sure this line is the last line
client.login(TOKEN); //login bot using token