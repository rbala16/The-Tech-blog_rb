const { comment } = require('../models');

const commentData = [
  {
    comment_text: "Great job",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Very Nice!!",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Awesome!",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => comment.bulkCreate(commentData);

module.exports = seedComments;