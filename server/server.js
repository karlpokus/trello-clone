var express = require('express'),
    graphqlHTTP = require('express-graphql'),
    { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express(),
    PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT);

console.log('Server running on port', PORT);