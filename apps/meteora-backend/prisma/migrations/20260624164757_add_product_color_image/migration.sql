/*
  Warnings:

  - Added the required column `image` to the `ProductColor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductColor" ADD COLUMN     "image" TEXT NOT NULL;
