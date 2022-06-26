

module.exports={
    name:"ping",
    execute:(message,arguments,client)=>{
        message.reply(`Calculating ping...`).then(resultmessage=>{
            const ping =resultmessage.createdTimestamp-message.createdTimestamp
            resultmessage.edit(`Ping: ${ping} \nAPI Ping: ${client.ws.ping}`)
        })
    }
}