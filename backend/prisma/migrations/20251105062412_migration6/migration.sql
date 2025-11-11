/*
  Warnings:

  - You are about to drop the column `imageId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gameId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgPath` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Character" DROP CONSTRAINT "Character_imageId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "imageId",
DROP COLUMN "path",
ADD COLUMN     "gameId" INTEGER NOT NULL,
ADD COLUMN     "imgPath" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Image";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "imgPath" TEXT NOT NULL,
    "baseWidth" INTEGER NOT NULL,
    "baseHeight" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
