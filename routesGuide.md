# REST Routes Reference

## Table of Contents

-   [User Routes](#user)
-   [Friend & Friend Req Routes](#friend)
-   [Post Routes](#post)
-   [Comment Routes](#comment)

## <a id="user"></a> User Routes

(Friend and friend request routes are below)

<br>

### Get All Users

Returns an array of all user objects

```
GET /api/user/
```

<br>

### Get One User

Returns one user object <br> `/:id` param -> the ID of the user object requested

```
GET /api/user/:id
```

<br>

### Post a New User

Adds a user row to DB and returns the new user object <br>

```
POST /api/user/
```

<br>

Body format: <br>

```
body: {
    email: (string)
    password: (string)
    first: (string) // first name of user
    last: (string) // last name of user
    window: (string) // starting time of user's posting window [format: 'HH:MM']
}
```

Error is thrown if any of these fields are not included (or are the wrong format)

<br>

### Update an Existing User

Updates a user row in DB and returns the updated user object <br>

This is also used to add a user's `avatar` and update their `streak`, besides the usual user fields (`email`, `password`, etc.)

<br> `/:id` param : ID of user to be updated <br>

```
POST /api/user/:id
```

<br>

Body format (all fields optional): <br>

```
body: {
    email: (string)
    password: (string)
    first: (string) // first name of user
    last: (string) // last name of user
    streak: (int) // how many days the user has posted in a row
    window: (string) // starting time of user's posting window [format: 'HH:MM']
    avatar: (string) // the 'filename.png' of the user's uploaded profile picture
}
```

<br>

### Delete One User

Deletes one user object <br> `/:id` param -> the ID of the user object to be deleted

```
DELETE /api/user/:id
```

<br>

## <a id="friend"></a> Friend and Friend Req Routes

<br>

### Get One User's Friends

Returns an array of all of one user's friends <br> `/:id` param -> the ID of the user whose friend objects are requested

```
GET /api/user/friend/:id
```

<br>

### Get One User's Friend Requests

Returns an array of all of one user's sent or received friend requests <br> `/:id` param -> the ID of the user whose sent/received friend reqs are requested <br> query: `reqs` -> must be `'sent'` or `'received'`

<br>

For a user's received friend requests

```
GET /api/user/req/:id?reqs=received
```

For a user's sent friend requests

```
GET /api/user/req/:id?reqs=sent
```

### Post a Sent Friend Req

Returns a friend req object (simply, a friend object with `request=true`)<br> The `user_id` in the object is the user who sent the request<br> The `friend_id` is the user who received the request <br>

`/:id` param -> the ID of the user who sent the request<br> Body MUST include `"friend" : [ID of user requested]` <br>

```
POST /api/user/req/:id
```

<br>

### Accepting a Sent Friend Req

Creates a new friend object and returns:<br>

```
{
    updated: [friend object that initially held the request]
    // user_id: user who initially sent the request
    // friend_id: user who received (and accepted) the request
    // request: updated to become false

    friend: [new friend object created]
    // user_id: user who received (and accepted) the request
    // friend_id: user who initially sent the request
    // request: set to false upon creation
}
```

The `user_id` in the object is the user who received the request<br> The `friend_id` is the user who sent the request <br>

`/:id` param -> the ID of the user who received the request<br> Body MUST include `"friend" : [ID of user who sent the request]` <br>

```
POST /api/user/friend/:id
```

<br>

### Denying a Sent Friend Req

Deletes a friend request in the DB:<br>

`/:id` param -> the ID of the user who received the request<br> Body MUST include `"friend" : [ID of user who sent the request]` <br>

```
DELETE /api/user/req/:id
```

<br>

### Deleting a Friendship

Deletes two friend rows in the DB:<br> First row: `{user_id: user1, friend_id: user2}`<br> Second row: `{user_id: user2, friend_id: user1}`

<br>

`/:id` param -> the ID of the user who is removing a friend <br> Body MUST include `"friend" : [ID of user who is being removed]` <br>

```
DELETE /api/user/friend/:id
```

<br>

## <a id="post"></a> Post Routes

comment routes are below

<br>

### Get All Posts

Returns an array of all posts <br>

```
GET /api/post/
```

<br>

### Get One User's Posts

Returns an array one user's posts <br> `/:id` param -> the ID of the user whose post objects are requested

```
GET /api/post/user/:id
```

<br>

### Get One User's Friends' Posts

Returns an array one user's friends' posts <br> `/:id` param -> the ID of the user whose friends' post objects are requested

```
GET /api/post/friends/:id
```

<br>

### Get One Post

Returns a post object <br> `/:id` param -> the ID of the post requested

```
GET /api/post/:id
```

<br>

### Create a Post

NOTE: This endpoint requires a file to be sent in the request, otherwise errors are thrown.

Adds a new post to DB, uploads post picture to S3, and returns the new post object <br> `/:id` param -> the ID of the user creating the post <br> The filename in the DB is set and referenced as `[userID]-[filename].[ext]`

```
POST /api/post/:id
```

Body format:

```
body: {
    caption: [string] // the post's caption
}
```

<br>

### Update a Post

Updates a post in the DB and returns the updated post object <br> `/:id` param -> the ID of the post to be updated

```
PUT /api/post/:id
```

Body format (all fields optional):

```
body: {
    caption: [string] // the post caption
}
```

<br>

### Delete a Post

Deletes a post from the DB. <br> `/:id` param -> the ID of the post to be deleted

```
DELETE /api/post/:id
```

<br>

## <a id="comment"></a> Comment Routes

<br>

### Get All User Comments

Returns an array of all of one user's comments <br> `/:id` param -> ID of user whose comments are requested <br>

```
GET /api/post/comment/user/:id
```

<br>

### Get All of a Post's Comments

Returns an array of all of one post's comments <br> `/:id` param -> ID of post whose comments are being requested <br>

```
GET /api/post/comment/:id
```

<br>

### Add a Comment to a Post

Creates a new comment and returns the new comment object <br> `/:id` param -> ID of post being commented on <br>

```
POST /api/post/comment/:id
```

<br>

### Update a Comment on a Post

Updates a comment and returns the updated comment object <br> `/:id` param -> ID of comment to be updated <br>

```
PUT /api/post/comment/:id
```

<br>

### Delete a Comment

Deletes a comment from the DB <br> `/:id` param -> ID of comment to be deleted <br>

```
DELETE /api/post/comment/:id
```

<br>
