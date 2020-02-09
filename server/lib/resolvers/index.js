"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("../data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('apollo-server'),
    PubSub = _require.PubSub;

var pubsub = new PubSub();
var resolvers = {
  Query: {
    hello: function hello(_, args) {
      return "Hello ".concat(args.name || 'World', "!");
    },
    getAllMessages: function getAllMessages(_, args, context) {
      return _data.default;
    }
  },
  Mutation: {
    addMessage: function addMessage(_, args, context) {
      _data.default.push(args);

      pubsub.publish(MESSAGE_ADDED, {
        messageAdded: args
      });
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: function subscribe() {
        return pubsub.asyncIterator([MESSAGE_ADDED]);
      }
    }
  }
};
var _default = resolvers;
exports.default = _default;