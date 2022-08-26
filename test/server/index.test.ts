import app from "../../server/index";
import request from "supertest";

// NODE_ENV set to test, uses test dB

describe("REST route tests", () => {
  describe("Basic user functionality", () => {
    // should create a new user successfully
    test("POST: User", (done) => {
      let user = {
        email: "1",
        password: "1",
        first: "1",
        last: "1",
        window: "01:00",
      };

      request(app)
        .post("/api/user")
        .send(JSON.stringify(user))
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(user)
        .end((err, res) => {
          if (err) return err;
          return done();
        });

    // add another
      user.email = "2";
      request(app)
        .post("/api/user")
        .send(JSON.stringify(user))
        .set("Accept", "application/json");
    });
    test("GET: User", () => {});
  });
});

export {};
