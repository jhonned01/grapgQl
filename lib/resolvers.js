'use strict'


const courses=[
    {
        _id: 'anyid',
        title: 'My Titulo',
        teacher: 'My PRofesor',
        description: 'Mi Description',
        topic: 'Programacion'
    },
    {
        _id: 'anyid',
        title: 'My Titulo 2',
        teacher: 'My PRofesor 2',
        description: 'Mi Description 2',
        topic: 'Programacion'
    },
    {
        _id: 'anyid',
        title: 'My Titulo 3',
        teacher: 'My PRofesor 3',
        description: 'Mi Description 3',
        topic: 'Programacion'
    }

]

module.exports={


    hello: () => {
        return 'hola mundo'
    },
    saludo: () => {
        return 'hola a todos'
    },
    getCourses:()=>{
        return courses
    }

}