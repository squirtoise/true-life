import 'dotenv/config';

import app from '../../server/index';
import request from 'supertest';

// NODE_ENV set to test, uses test dB

/* 
  Test DB visual (after tests):

  users:
  userId: 1
  userId: 2

  user_friends:
  userId: 1, friendId: 2, request: false
  userId: 2, friendId: 1, request: false
  (request = true on initial post, then request is accepted by user 2)

  posts:
  postId: 1, creator: 1
  postId: 2, creator: 2

  comments:
  commentId: 1, postId: 1, creator: 1
  commentId: 1, postId: 2, creator: 1
*/

describe('REST route tests', () => {
    describe('User routes', () => {
        // should create a new user successfully
        test('POST /api/user/', async () => {
            let user = {
                email: '1',
                password: '1',
                first: '1',
                last: '1',
                window: '01:00',
            };

            const user1 = await request(app).post('/api/user').send(user).set('Accept', 'application/json');

            expect(user1.headers['content-type']).toMatch(/json/);
            expect(user1.status).toEqual(200);

            expect(user1.body.id).toEqual(1);
            expect(user1.body.email).toEqual(user.email);
            expect(user1.body.first_name).toEqual(user.first);
            expect(user1.body.last_name).toEqual(user.last);
            expect(user1.body.window_start).toEqual(user.window);

            // add another
            user.email = '2';

            const user2 = await request(app).post('/api/user').send(user).set('Accept', 'application/json');

            expect(user2.headers['content-type']).toMatch(/json/);
            expect(user2.status).toEqual(200);

            expect(user2.body.id).toEqual(2);
            expect(user2.body.email).toEqual(user.email);
            expect(user2.body.first_name).toEqual(user.first);
            expect(user2.body.last_name).toEqual(user.last);
            expect(user2.body.window_start).toEqual(user.window);
        });

        test('GET /api/user/', async () => {
            // user ID of first user created in GET: User
            const userID = 1;

            const expectedUser = {
                email: '1',
                password: '1',
                first: '1',
                last: '1',
                window: '01:00',
            };

            const response = await request(app).get(`/api/user/${userID}`).set('Accept', 'application/json');

            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);

            expect(response.body.id).toEqual(userID);
            expect(response.body.email).toEqual(expectedUser.email);
            expect(response.body.first_name).toEqual(expectedUser.first);
            expect(response.body.last_name).toEqual(expectedUser.last);
            expect(response.body.window_start).toEqual(expectedUser.window);
        });

        test('GET /api/user/', async () => {
            const response = await request(app).get(`/api/user`).set('Accept', 'application/json');

            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);
            expect(response.body[0].id).toEqual(1);
        });

        test('PUT api/user/:id', async () => {
            const userID = 1;
            const body = { first: 'test' };
            const response = await request(app)
                .put(`/api/user/${userID}`)
                .send(body)
                .set('Accept', 'application/json');

            console.log(response);

            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);
            expect(response.body[0].first_name).toEqual(body.first);
        });

        test('DELETE /api/user/:id', async () => {
            let user = {
                email: '3',
                password: '1',
                first: '1',
                last: '1',
                window: '01:00',
            };

            const userID = 3;
            const user3 = await request(app).post('/api/user').send(user).set('Accept', 'application/json');
            expect(user3.status).toEqual(200);

            const delResponse = await request(app).delete(`/api/user/${3}`).set('Accept', 'application/json');
            expect(delResponse.status).toEqual(200);
        });

        // test if a friend request gets sent

        // test if get friend requests works

        // test if a friend request gets denied

        // test if a friend request gets accepted

        // if get friend list works

        // if delete friend works
    });
});

export {};
