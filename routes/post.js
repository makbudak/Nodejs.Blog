const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/add', (req, res) => {
    res.render('site/addpost');
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).then(post => {
        console.log(post);
        res.render('site/post', {
            post: post.toJSON()
        });
    })
});

router.post('/test', (req, res) => {
    console.log(req.body);
    Post.create(req.body);
    // console.log(req.files.post_image);
    res.redirect('/');
});

module.exports = router;