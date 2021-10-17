const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'comment_text', 'user_id', 'post_id']
    })
        .then(dbCommentData => {
            res.json(dbCommentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

});

module.exports = router;