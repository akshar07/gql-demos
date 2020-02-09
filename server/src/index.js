const {
  GraphQLServer
} = require('graphql-yoga')
import typeDefs from './schema';
import resolvers from './resolvers';



const server = new GraphQLServer({
  typeDefs,
  resolvers
})
server.start(() => console.log(`Server is running at http://localhost:4000`))