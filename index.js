'use strict'

const express = require('express')
const {  buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const {readFileSync}= require('fs')
const {join}= require('path')

const resolvers = require('./lib/resolvers')
// Construye un esquema, usando el lenguaje de esquema GraphQL
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql'),'utf-8'))
// La raíz proporciona una función de resolución para cada punto final de la API
const root = {

}

// Ejecutar el query hello terminal
// graphql(schema, '{saludo}', resolvers).then((data)=>{
//     console.log(data);
// })

const app = express()
app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true

}))

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/api')
