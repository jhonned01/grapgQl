'use strict'

const express= require('express')

const { graphql, buildSchema } = require('graphql')

const  { graphqlHTTP}= require('express-graphql')



// Construye un esquema, usando el lenguaje de esquema GraphQL
const schema =buildSchema (`
    type Query {
        hello: String
        saludo: String
    }
`)
// La raíz proporciona una función de resolución para cada punto final de la API
const root={
    hello:()=>{
        return 'hola mundo'
    },
    saludo:()=>{
        return 'hola a todos'
    }
}



//Ejecutar el query hello terminal
// graphql(schema, '{saludo}', resolvers).then((data)=>{
//     console.log(data);
// })

const app = express()
app.use(`/api`,graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,

})) 

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/api');
