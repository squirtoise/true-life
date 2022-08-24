-- run this cmd to update DB
-- psql -d "PG URL HERE" -f server/scripts/DB.sql

DROP TABLE IF EXISTS users;

CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"avatar" VARCHAR(255) DEFAULT 'defaultAvatar.png',
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.groups" (
	"id" serial NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"creator" serial NOT NULL,
	CONSTRAINT "groups_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.user_groups" (
	"user_id" integer NOT NULL,
	"group_id" integer NOT NULL
) WITH (
  OIDS=TRUE
);



CREATE TABLE "public.posts" (
	"id" serial NOT NULL,
	"picture" VARCHAR(255) DEFAULT 'defaultPost.png',
	"creator" integer NOT NULL DEFAULT 'defaultPost.png',
	"group" integer,
	"likes" integer DEFAULT '0',
	"dislikes" integer DEFAULT '0',
	"posted_on" DATETIME NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.comments" (
	"id" serial NOT NULL,
	"post" integer NOT NULL,
	"content" varchar(255) NOT NULL,
	"creator" integer NOT NULL,
	"posted_on" DATETIME NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "groups" ADD CONSTRAINT "groups_fk0" FOREIGN KEY ("creator") REFERENCES "users"("id");

ALTER TABLE "user_groups" ADD CONSTRAINT "user_groups_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "user_groups" ADD CONSTRAINT "user_groups_fk1" FOREIGN KEY ("group_id") REFERENCES "groups"("id");

ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("creator") REFERENCES "users"("id");
ALTER TABLE "posts" ADD CONSTRAINT "posts_fk1" FOREIGN KEY ("group") REFERENCES "groups"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("post") REFERENCES "posts"("id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("creator") REFERENCES "users"("id");





