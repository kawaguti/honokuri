'use strict';

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;

	// mogiri
	if (commandName === 'honokuri') {
        const member_tag = interaction.member.user.tag;
        console.log(member_tag);
        const user_id = encodeURIComponent(member_tag);
		await interaction.reply("https://docs.google.com/forms/d/e/1FAIpQLSf5ueFr41vkR0aqh_SddA1cUdgL1n6GOGOmAdTlOsev-b8P3w/viewform?usp=pp_url&entry.1882509969=" + user_id);
        return;
	}

});

// Login to Discord with your client's token
client.login(token);

// for docker keep-alive in azure
var http = require('http');
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080);
 
console.log('Server running at http://localhost:8080/');