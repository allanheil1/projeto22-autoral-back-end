/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Restaurants` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Restaurants" ADD COLUMN     "code" VARCHAR(255),
ADD COLUMN     "photo" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurants_code_key" ON "Restaurants"("code");
