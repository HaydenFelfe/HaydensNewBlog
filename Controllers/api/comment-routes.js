const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.status(201).json({ message: 'Comment created successfully', comment: newComment });
  } catch (err) {
    res.status(500).json({ error: 'Unable to create the comment' });
  }
});

module.exports = router;
