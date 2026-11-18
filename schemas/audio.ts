import { z } from "zod";
import { languageSchema } from "./language";
import { levelSchema } from "./level";
import { dayDirectorySchema } from "./day";

export const AudioManifestEntrySchema = z.object({
  path: z.string().min(1),
  target: z.string().min(1),
});

export const AudioManifestSchema = z.record(
  z.string(),
  AudioManifestEntrySchema,
);

export type AudioManifestEntry = z.infer<typeof AudioManifestEntrySchema>;

export type AudioManifest = z.infer<typeof AudioManifestSchema>;

export const AudioGeneratorOptionsSchema = z
  .object({
    language: languageSchema,
    level: levelSchema,
    day: dayDirectorySchema,
    entry: z.string().min(1),

    entryId: z.string().min(1).optional(),
    exampleId: z.string().min(1).optional(),
    locale: languageSchema.optional(),
  })
  .refine(
    (options) =>
      [options.entryId, options.exampleId, options.locale].every(Boolean) ||
      [options.entryId, options.exampleId, options.locale].every(
        (value) => value === undefined,
      ),
    {
      message: "entryId, exampleId and locale must be provided together",
    },
  );

export type AudioGeneratorOptions = z.infer<typeof AudioGeneratorOptionsSchema>;
