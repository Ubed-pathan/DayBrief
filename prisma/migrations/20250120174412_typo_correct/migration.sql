/*
  Warnings:

  - Made the column `imagePublicId` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `secureUrl` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `format` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "imagePublicId" SET NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "secureUrl" SET NOT NULL,
ALTER COLUMN "format" SET NOT NULL;
