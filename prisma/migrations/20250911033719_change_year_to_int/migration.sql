/*
  Warnings:

  - Added the required column `updatedAt` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "logo" TEXT,
    "description" TEXT,
    "year" INTEGER,
    "industry" TEXT,
    "scope" TEXT,
    "team" TEXT,
    "gallery" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Work" ("category", "description", "gallery", "id", "image", "industry", "logo", "scope", "slug", "team", "title", "year") SELECT "category", "description", "gallery", "id", "image", "industry", "logo", "scope", "slug", "team", "title", "year" FROM "Work";
DROP TABLE "Work";
ALTER TABLE "new_Work" RENAME TO "Work";
CREATE UNIQUE INDEX "Work_slug_key" ON "Work"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
