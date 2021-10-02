const express = require('express')();
const app =express();
const PORT = 8080;

app.use(express.json());

app.get('/tshirt',(req,res) => {
    res.status(200).send({
        id: '1',
        size: 'large'
    })
});

app.post('/tshirt/:id',() => {
    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(418).send({message: `We need a logo!`})
    }

    res.send({
        tshirt: `body with your ${logo} and ID of ${id}`,
    })
});