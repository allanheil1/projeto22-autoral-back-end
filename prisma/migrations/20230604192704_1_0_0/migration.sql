-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,
    "price" DECIMAL NOT NULL,
    "category" VARCHAR NOT NULL,

    CONSTRAINT "Menu_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "id" SERIAL NOT NULL,
    "MenuId" INTEGER NOT NULL,
    "TableId" INTEGER NOT NULL,

    CONSTRAINT "OrderItems_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "tables" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Restaurants_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tables" (
    "id" SERIAL NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "status" VARCHAR NOT NULL,
    "tableNumber" INTEGER NOT NULL,

    CONSTRAINT "Tables_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "login" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "profile" VARCHAR NOT NULL,
    "restaurantId" INTEGER,

    CONSTRAINT "Users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_login_key" ON "Users"("login");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_fk0" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_fk0" FOREIGN KEY ("MenuId") REFERENCES "Menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_fk1" FOREIGN KEY ("TableId") REFERENCES "Tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Tables" ADD CONSTRAINT "Tables_fk0" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
