const typeDefs = `
    type Message {
        content: String!
        senderName: String!
    }
    
    type Query {
        hello(name: String): String
        getAllMessages: [Message]!
    }

    type Mutation {
        addMessage(content: String, senderName: String): Message
    }

    type Subscription {
        messageAdded: Message
    }
`;


export default typeDefs;