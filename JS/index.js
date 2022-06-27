console.clear();
const Discord=require("discord.js");
const client=new Discord.Client({ intents: 32767});
const config=require("./config.json");
const token=config.TOKEN;
const prefix=config.prefix;
const fs=require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter(file=>file.endsWith('.js'));
for (const file of commandFiles){
    const command=require(`./src/commands/${file}`);

    client.commands.set(command.name,command);
}
client.on('ready', ()=>{
    console.log('Java Script is Online')
})

client.on('messageCreate', (message)=>{
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command= args.shift().toLowerCase();

   
    if (command==='ping'){
        client.commands.get('ping').execute(message,arguments,client);
    }
})

client.login(config.TOKEN);
