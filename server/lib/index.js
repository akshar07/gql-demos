"use strict";

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('graphql-yoga'),
    GraphQLServer = _require.GraphQLServer;

var server = new GraphQLServer({
  typeDefs: _schema.default,
  resolvers: _resolvers.default
});
server.start(function () {
  return console.log("Server is running at http://localhost:4000");
});