import { ContentImporters } from "@/server/types";

// AUTO-GENERATED FILE. DO NOT EDIT.
// Run: node scripts/generate-content-importers.mjs

const generatedContentImporters = {
  "de-DE": {
    "A1-1": {
      "day_04": {
        "dialogues": () => import("../content/de-DE/A1-1/days/day_04/dialogues.json"),
        "lesson": () => import("../content/de-DE/A1-1/days/day_04/lesson.json"),
        "locales": {
          "en-UK": () => import("../content/de-DE/A1-1/days/day_04/locales/en-UK.json"),
          "pt-BR": () => import("../content/de-DE/A1-1/days/day_04/locales/pt-BR.json"),
        },
      },
      "day_03": {
        "dialogues": () => import("../content/de-DE/A1-1/days/day_03/dialogues.json"),
        "lesson": () => import("../content/de-DE/A1-1/days/day_03/lesson.json"),
        "locales": {
          "en-UK": () => import("../content/de-DE/A1-1/days/day_03/locales/en-UK.json"),
          "pt-BR": () => import("../content/de-DE/A1-1/days/day_03/locales/pt-BR.json"),
        },
      },
      "day_02": {
        "dialogues": () => import("../content/de-DE/A1-1/days/day_02/dialogues.json"),
        "lesson": () => import("../content/de-DE/A1-1/days/day_02/lesson.json"),
        "locales": {
          "en-UK": () => import("../content/de-DE/A1-1/days/day_02/locales/en-UK.json"),
          "pt-BR": () => import("../content/de-DE/A1-1/days/day_02/locales/pt-BR.json"),
        },
      },
      "day_01": {
        "dialogues": () => import("../content/de-DE/A1-1/days/day_01/dialogues.json"),
        "lesson": () => import("../content/de-DE/A1-1/days/day_01/lesson.json"),
        "locales": {
          "en-UK": () => import("../content/de-DE/A1-1/days/day_01/locales/en-UK.json"),
          "pt-BR": () => import("../content/de-DE/A1-1/days/day_01/locales/pt-BR.json"),
        },
      },
    },
  },
} satisfies ContentImporters;

export const contentImporters: ContentImporters = generatedContentImporters;
