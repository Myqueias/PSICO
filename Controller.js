const express=require('express');
const bodyParser=require('body-parser');
const model=require('./models');
const cors=require('cors');


let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/create',async(req,res)=>{
    let reqs = await model.Usuarios.create({
        'NomeCompleto':req.body.nomeCompleto,
        'Password':req.body.Password,
        'Cpf':req.body.cpf,
        'email':req.body.email,
        'createdAt':new Date(),
        'updatedAt':new Date()

    });
    if(reqs){
        res.send(JSON.stringify('O usuário foi cadastrado com sucesso!'));
    }
})

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servido Rodando - 1');
})
