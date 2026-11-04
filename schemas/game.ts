import { z } from "zod";
import { GAME_SCENES, GAME_WORLDS } from "@/constants/game";
import { CharacterSchema } from "./actors";
import { MoodSchema } from "./dialogues";

export type Character = z.infer<typeof CharacterSchema>;

export type Mood = z.infer<typeof MoodSchema>;

export const CharacterMoodSchema = z.object({
  character: CharacterSchema,
  mood: MoodSchema,
});

export type CharacterMood = z.infer<typeof CharacterMoodSchema>;

export const GameSceneSchema = z.enum([
  GAME_SCENES.CELL_SCENE,
  GAME_SCENES.DREAM_SCENE,
  GAME_SCENES.TRAIN_SCENE,
]);

export type GameScene = z.infer<typeof GameSceneSchema>;

export const GameWorldSchema = z.enum([GAME_WORLDS.REAL, GAME_WORLDS.DREAM]);

export type GameWorld = z.infer<typeof GameWorldSchema>;
