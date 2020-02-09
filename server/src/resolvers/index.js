const {
    PubSub
} = require('apollo-server');
const pubsub = new PubSub();
import messageData from '../data';

const resolvers = {
    Query: {
        hello: (_, args) => `Hello ${args.name || 'World'}!`,
        getAllMessages: (_, args, context) => {
            return messageData;
        }
    },
    Mutation: {
        addMessage: (_, args, context) => {
            messageData.push(args);
            pubsub.publish(MESSAGE_ADDED, {
                messageAdded: args
            });
        }
    },
    Subscription: {
        messageAdded: {
            subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED]),
        }
    }
}

export default resolvers;