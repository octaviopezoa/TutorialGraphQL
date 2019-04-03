// código del servidor
const express = require('express');
const app = express(); //inicializamos express

// *********************
// integracion Graphql

// integracion Graphql + express
const expressGQL = require('express-graphql');
const { buildSchema } = require('graphql'); //iniciams GQL y llamamos un módulo en especial

// obtencion de data
const { cursos } = require('./data.json');

// console.log(cursos);



const schema = buildSchema(`
    type Query {
        curso (id: Int!): Curso
        cursos (topic:String): [Curso]
    }

    type Curso {
        id: Int
        titulo: String
        autor: String
        topic: String
    }
`);

const root = {
    message: () => "hola mundo"
}

app.use('/graphql', expressGQL({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// inicializo servidor
app.listen(3000, () => console.log('server on port 3000'));