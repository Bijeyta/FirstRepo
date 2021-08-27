const restify = require('restify');
const { BotFrameworkAdapter, ConversationState, MemoryStorage } = require('botbuilder');

const adapter = new BotFrameworkAdapter({
    appId: '',
    appPassword: ''
});

adapter.onTurnError = async (context, error) => {
    await context.sendActivity('Error has been encountered by Bot');
    console.log('Error has been encountered by Bot', error);
}

const server = restify.createServer();

server.listen(3978, () => {
    console.log(`${server.name} is listinig to the Bot ${server.url}`);
})

server.post('/api/messages', (req,res) => {
    adapter.processActivity(req,res, async(context) => {
        await context.sendActivity('Welcome to Celebal Technologies');
    })
})