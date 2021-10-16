const router = require('express').Router();
const { Post, User } = require('../../models/');

router.get('/', (req, res) => {
    Post.findAll({
        //Query configuration
        attributes: ['id',
            'title',
            'body',
            'created_at',
            
        ],
        order: [['created_at', 'DESC']],
        include: [
            // uncomment when Comment model is finished and associated with posts
            // {
            //     model: Comment,
            //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },


            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router