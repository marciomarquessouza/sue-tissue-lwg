import { z } from "zod";
import { LessonSchema } from "./lesson";
import { DialoguesSchema } from "./dialogues";

export const dayDirectorySchema = z.string().regex(/^day_\d{2}$/);

export type DayDirectory = z.infer<typeof dayDirectorySchema>;

export const DayContentSchema = z.object({
  lesson: LessonSchema,
  dialogues: DialoguesSchema,
});

export type DayContent = z.infer<typeof DayContentSchema>;
