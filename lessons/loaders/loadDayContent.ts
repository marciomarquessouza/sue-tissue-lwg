import { LessonOptions } from "@/server/types";
import { contentImporters } from "../generated/contentImporters";
import { LessonDefinitionSchema } from "@/server/schemas/lesson";
import { dayLessonLocalesScheme } from "@/server/schemas/locales";

export async function loadDayContent({
  lessonLanguage,
  level,
  day,
  playerLanguage,
}: LessonOptions) {
  const importers = contentImporters[lessonLanguage]?.[level]?.[day];

  if (!importers) {
    throw new Error(
      `Lesson content not found: ${lessonLanguage}/${level}/${day}`,
    );
  }

  const localeImporter = importers.locales[playerLanguage];

  if (!localeImporter) {
    throw new Error(`Locale not found: ${playerLanguage}`);
  }

  const [lessonModule, localeModule] = await Promise.all([
    importers.lesson(),
    localeImporter(),
  ]);

  const lesson = LessonDefinitionSchema.parse(lessonModule.default);

  const locales = dayLessonLocalesScheme.parse(localeModule.default);

  return {
    lesson,
    lessonLocale: locales.lesson,
    dialogues: locales.dialogues,
  };
}
