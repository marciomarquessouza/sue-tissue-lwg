import { z } from "zod";

export const ACTORS = [
  "jailer",
  "tutor",
  "player",
  "punisher",
  "learningNode",
  "guardian",
] as const;

export const CharacterSchema = z.enum(ACTORS);

export type Character = z.infer<typeof CharacterSchema>;
