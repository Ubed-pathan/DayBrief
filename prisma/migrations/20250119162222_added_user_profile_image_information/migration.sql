/*
  Warnings:

  - Added the required column `fromat` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secureUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "fromat" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "secureUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "format" TEXT,
ADD COLUMN     "profileImageId" TEXT,
ADD COLUMN     "profileImageUrl" TEXT,
ADD COLUMN     "secureImageUrl" TEXT;
