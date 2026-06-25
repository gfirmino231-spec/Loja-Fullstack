-- AlterTable
ALTER TABLE "ProductSize" ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 50;

-- CreateIndex
CREATE UNIQUE INDEX "ProductSize_productId_sizeId_key" ON "ProductSize"("productId", "sizeId");
