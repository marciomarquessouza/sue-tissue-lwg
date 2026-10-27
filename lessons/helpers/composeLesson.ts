import {
  Lesson,
  LessonDefinition,
  LessonEntryStep,
  LessonLocale,
} from "@/server/schemas/lesson";

interface ComposeLessonOptions {
  lesson: LessonDefinition;
  locale: LessonLocale;
}

export function composeLesson({
  lesson,
  locale,
}: ComposeLessonOptions): Lesson {
  return {
    id: lesson.id,
    limits: lesson.limits,

    entries: Object.entries(lesson.entries).map(([id, entry]) => {
      const localizedEntry = locale.entries[id];

      if (!localizedEntry) {
        throw new Error(`Missing locale for lesson entry: ${id}`);
      }

      return {
        id,
        sequence: entry.sequence,
        target: entry.target,
        reference: localizedEntry.reference,

        steps: Object.entries(localizedEntry.steps).map(([type, step]) => ({
          type,
          ...step,
        })) as LessonEntryStep[],
      };
    }),
  };
}
