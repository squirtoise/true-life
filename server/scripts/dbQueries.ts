const queries = {
  getAllUsers: `SELECT * FROM users`,
  getUser: `SELECT id FROM users WHERE user_id = $1`,

  createUser: `INSERT INTO users (id, email, password, first_name, last_name, window_start) VALUES ($1)`,
  updateUser: ``,
  deleteUser: ``,

  getFriends: ``,
  addFriend: ``,
  deleteFriend: ``,

  getAllPosts: ``,
  getUserPosts: ``,
  getFriendPosts: ``,

  createPost: ``,
  updatePost: ``,
  deletePost: ``,

  getLikes: ``,
  getDislikes: ``,
  addLike: ``,
  addDislike: ``,

  getComments: ``,
  addComment: ``,
  updateComment: ``,
  deleteComment: ``,
};

export default queries;
