/*
  Warnings:

  - You are about to alter the column `gallery` on the `Work` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `scope` on the `Work` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `team` on the `Work` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.

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
    "logo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER,
    "industry" TEXT,
    "scope" JSONB NOT NULL DEFAULT [],
    "team" JSONB NOT NULL DEFAULT [],
    "gallery" JSONB NOT NULL DEFAULT []
);
INSERT INTO "new_Work" ("category", "description", "gallery", "id", "image", "industry", "logo", "scope", "slug", "team", "title", "year") SELECT "category", "description", "gallery", "id", "image", "industry", "logo", "scope", "slug", "team", "title", "year" FROM "Work";
DROP TABLE "Work";
ALTER TABLE "new_Work" RENAME TO "Work";
CREATE UNIQUE INDEX "Work_slug_key" ON "Work"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
