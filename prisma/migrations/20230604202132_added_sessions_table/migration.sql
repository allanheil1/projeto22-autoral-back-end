-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "usertoken" VARCHAR(255) NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);
