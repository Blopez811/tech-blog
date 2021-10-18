const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(dbPostData[0]);
        res.render('homepage', { 
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/dashboard', withAuth, (req,res) => {
    res.json('Here is the glorious dashboard page!')
})

module.exports = router;