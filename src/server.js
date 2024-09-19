
const express = require('express');
const { Router, Request, Response } = require('express');


const app = express();
const route = Router();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Servidor express funcionando' });
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send({message:"Usuario solicitado:", id:id, nome:"Nome teste"})
        
    res.send(`Id do usuario:${req.params.id}`);
})

app.post('/users', (req, res) => {
    const id = req.body.id;
    const email = req.body.email
    const nome =  req.body.nome

        console.log(id,nome, email)
        
    res.status(201).send({"mensagem":"sucesso na inclusão!"})
        
    
})
app.use(route);
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});