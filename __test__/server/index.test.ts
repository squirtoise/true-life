import app from "./testServer";
import request from "supertest";

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

describe("REST route tests", () => {
  describe("User routes", () => {
    // should create a new user successfully
    test.only("POST: User", async () => {
      let user = {
        email: "1",
        password: "1",
        first: "1",
        last: "1",
        window: "01:00",
      };

      const user1 = await request(app)
        .post("/api/user")
        .send(JSON.stringify(user))
        .set("Accept", "application/json");

      expect(user1.headers["Content-Type"]).toMatch(/json/);
      expect(user1.status).toEqual(200);
      expect(user1.body).toEqual(user);

      // add another
      user.email = "2";

      const user2 = await request(app)
        .post("/api/user")
        .send(JSON.stringify(user))
        .set("Accept", "application/json");

      expect(user2.headers["Content-Type"]).toMatch(/json/);
      expect(user2.status).toEqual(200);
      expect(user2.body).toEqual(user);
    });

    test("GET: User", async () => {
      // user ID of first user created in GET: User
      const userID = 1;

      const expectedUser = {
        email: "1",
        password: "1",
        first: "1",
        last: "1",
        window: "01:00",
      };

      const response = await request(app)
        .get(`/api/user/${userID}`)
        .set("Accept", "application/json");

      expect(response.headers["Content-Type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(expectedUser);

      return;
    });
  });
});

export {};
