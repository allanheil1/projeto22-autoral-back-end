/*
  Warnings:

  - You are about to drop the column `profile` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "profile",
ADD COLUMN     "isadm" BOOLEAN;
