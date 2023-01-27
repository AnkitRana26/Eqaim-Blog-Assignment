const { response } = require('express');
const mongoose = require('mongoose');


const connect = () => {

    return new Promise((resolve, reject) => {

        mongoose.connect('mongodb://127.0.0.1:27017/blog', (err) => {

            return err ? reject('DataBase Error') : resolve('Connected to DataBase');

        })


    })

}


module.exports = connect;