const express = require('express');
const router = express.Router();

//import express validator
const { body, validationResult } = require('express-validator');

// import database
const connection = require('../config/database');


// INDEX POST 
router.get('/', (req, res) => {

    // query 
    connection.query('SELECT * from posts', (err, rows) => {
        if (err) {
            return res.status(500).json({
                meta: {
                    code: 500,
                    status: false,
                    message: 'Internal Server Error',
                }

            })
        } else {
            return res.status(200).json({
                meta: {
                    code: 200,
                    status: true,
                    message: 'List Data Posts',
                },
                data: rows
            })
        }
    });
});

// SAVE POST 
router.post('/store', [
    body('title').notEmpty(),
    body('content').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //define formData
    let formData = {
        title: req.body.title,
        content: req.body.content
    }

    // insert query
    connection.query('INSERT INTO posts SET ?', formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows[0]
            })
        }
    })
})

// DETAIL POST 
router.get('/(:id)', (req, res) => {
    let id = req.params.id;
    connection.query(`SELECT * FROM posts WHERE id = ${id}`, (err, rows) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        }

        // if post not found
        if (rows.length <= 0) {
            return res.status(404).json({
                status: false,
                message: 'Data Post Not Found!',
            })
        }
        // if post found
        else {
            return res.status(200).json({
                status: true,
                message: 'Detail Data Post',
                data: rows[0]
            })
        }

    })
})


module.exports = router 