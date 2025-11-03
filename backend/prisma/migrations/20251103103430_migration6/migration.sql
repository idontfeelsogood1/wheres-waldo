/*
  Warnings:

  - You are about to drop the column `score` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `seconds` on the `Session` table. All the data in the column will be lost.
  - Added the required column `data` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "score",
DROP COLUMN "seconds",
ADD COLUMN     "data" TEXT NOT NULL;
