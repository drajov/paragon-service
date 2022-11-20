const express = require('express');

const app = new express();

app.listen(2022, () => {
    console.log('Paragon service listenin on 2022');
});

app.get('/hello', (req, res) => {
    res.send({message: "Hello to all Paragon students!"}).status(200);
});