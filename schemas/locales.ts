import { z } from "zod";
import { dialogueKeySchema, InteractionLineSchema } from "./dialogues";
import { languageSchema } from "./language";
import { levelSchema } from "./level";
import { LessonLocaleSchema } from "./lesson";

export const stepTypesSchema = z.enum([
  "introduction",
  "listening",
  "pronunciation",
  "writing",
]);

export type StepTypes = z.infer<typeof stepTypesSchema>;

export const dayLessonLocalesScheme = z.object({
  lesson: LessonLocaleSchema,
  dialogues: z.record(
    dialogueKeySchema,
    z.object({ lines: z.array(InteractionLineSchema) }),
  ),
});

export type DayLessonLocales = z.infer<typeof dayLessonLocalesScheme>;

export const localeContentOptionsSchema = z.object({
  language: languageSchema,
  level: levelSchema,
  dayDirectory: z.string().regex(/^day_\d{2}$/),
  locale: languageSchema,
});

export type LocaleContentOptions = z.infer<typeof localeContentOptionsSchema>;
