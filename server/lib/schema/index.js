"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var typeDefs = "\n    type Message {\n        content: String!\n        senderName: String!\n    }\n    \n    type Query {\n        hello(name: String): String\n        getAllMessages: [Message]!\n    }\n\n    type Mutation {\n        addMessage(content: String, senderName: String): Message\n    }\n\n    type Subscription {\n        messageAdded: Message\n    }\n";
var _default = typeDefs;
exports.default = _default;