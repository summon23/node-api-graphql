let {
    graphql,
    buildSchema
} = require('graphql');
const express = require('express');
const graphqlHTTP = require('express-graphql');

// let schema = buildSchema(
//     `type Query {
//         postTitle: String,
//         blogTitle: String
//     }`
// );

const schema = require('./src/schema');

const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000);
console.log('Running a GraphQL API Server on localhost:4000/');

// graphql(schema, '{hello}', root).then((response)=> {
//     console.log(response);
// });

