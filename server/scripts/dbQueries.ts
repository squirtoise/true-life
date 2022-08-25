const queries = {
  getAllUsers: `SELECT * FROM users`,
  getUser: `SELECT * FROM users WHERE id = $1`,

  createUser: `INSERT INTO users (id, email, password, first_name, last_name, window_start, created_on) VALUES ($1, $2, $3, $4, $5, $6, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
  updateUser: `UPDATE users SET email = $2, password = $3, first_name = $4, last_name = $5, streak = $6, window_start = $7, avatar = $8 WHERE id = $1`,
  deleteUser: `DELETE FROM users WHERE id = $1`,

  // returns rows in table where request = false (they are friends)
  getFriends: `SELECT * FROM user_friends WHERE user_id = $1 AND request = 0`,
  // returns rows in table where request = true (friend request is still active)
  getFriendReqs: `SELECT * FROM user_friends WHERE user_id = $1 AND request = 1`,
  addFriendReq: `INSERT INTO user_friends (user_id, friend_id, TRUE) VALUES ($1, $2) RETURNING *`,

  // when user accepts a friend request, updates request row and sets request to false....
  addFriendByReq: `UPDATE user_friends SET request = 0 WHERE friend_id = $1`,
  //...then adds another row with other user as their own friend
  addFriend: `INSERT INTO user_friends (user_id, friend_id, FALSE) VALUES ($1, $2) RETURNING *`,

  //TEST THIS
  deleteFriend: `DELETE FROM user_friends WHERE user_id = $1 AND friend_id = $2`,

  getAllPosts: `SELECT * FROM posts`,
  getPost: `SELECT * FROM posts WHERE id = $1`,
  getUserPosts: `SELECT * FROM posts WHERE creator = $1`,
  //TEST THIS
  getFriendPosts: `SELECT * FROM posts WHERE creator IN (SELECT friend_id FROM user_friends WHERE user_id = $1)`,

  createPost: `INSERT INTO posts (id, creator, picture, caption, posted_on) VALUES ($1, $2, $3, $4, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
  updatePost: `UPDATE posts SET caption = $2 WHERE id = $1`,
  deletePost: `DELETE FROM posts WHERE id = $1`,

  getComments: `SELECT * FROM comments WHERE post = $1`,
  addComment: `INSERT INTO comments (id, post, content, creator, posted_on) VALUES ($1, $2, $3, $4, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
  updateComment: `UPDATE comments SET content = $2 WHERE id = $1`,
  deleteComment: `DELETE FROM comments WHERE id = $1`,
};

export default queries;
