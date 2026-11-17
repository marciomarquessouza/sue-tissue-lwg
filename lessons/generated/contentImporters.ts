import { ContentImporters } from "@/server/types";

// AUTO-GENERATED FILE. DO NOT EDIT.
// Run: node scripts/generate-content-importers.mjs

const generatedContentImporters = {
  "en-UK": {
    "A1-1": {
      "day_01": {
        "dialogues": () => import("../content/en-UK/A1-1/days/day_01/dialogues.json"),
        "lesson": () => import("../content/en-UK/A1-1/days/day_01/lesson.json"),
        "locales": {
          "pt-BR": () => import("../content/en-UK/A1-1/days/day_01/locales/pt-BR.json"),
        },
      },
    },
  },
} satisfies ContentImporters;

export const contentImporters: ContentImporters = generatedContentImporters;
