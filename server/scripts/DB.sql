-- run this cmd to update DB
-- psql -d "postgres://wuyjrcmo:S2DzIJ4AaYItitIH7l5S6JCmsThiXVLZ@heffalump.db.elephantsql.com/wuyjrcmo" -f server/scripts/DB.sql

DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "posts" CASCADE;
DROP TABLE IF EXISTS "comments" CASCADE;
DROP TABLE IF EXISTS "user_friends" CASCADE;


CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"streak" integer DEFAULT '0',
	"window_start" VARCHAR(255) NOT NULL,
	"avatar" VARCHAR(255) DEFAULT 'defaultAvatar.png',
	"created_on" VARCHAR(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "posts" (
	"id" serial NOT NULL,
	"creator" integer NOT NULL,
	"picture" VARCHAR(255) DEFAULT 'defaultPost.png',
  "caption" VARCHAR(255),
	"likes" integer DEFAULT '0',
	"dislikes" integer DEFAULT '0',
	"posted_on" VARCHAR(255) NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"post" integer NOT NULL,
	"content" varchar(255) NOT NULL,
	"creator" integer NOT NULL,
	"posted_on" VARCHAR(255) NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

-- request specifies if it's a friend request or if they are friends
CREATE TABLE "user_friends" (
	"user_id" integer NOT NULL,
	"friend_id" integer NOT NULL,
	"request" boolean NOT NULL
) WITH (
  OIDS=FALSE
);

ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("creator") REFERENCES "users"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("post") REFERENCES "posts"("id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("creator") REFERENCES "users"("id");

ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_fk1" FOREIGN KEY ("friend_id") REFERENCES "users"("id");







