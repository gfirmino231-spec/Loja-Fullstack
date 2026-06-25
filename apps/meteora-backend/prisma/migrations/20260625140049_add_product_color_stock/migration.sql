-- AlterTable
ALTER TABLE "ProductColor" ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 50;

-- CreateIndex
CREATE UNIQUE INDEX "ProductColor_productId_colorId_key" ON "ProductColor"("productId", "colorId");
