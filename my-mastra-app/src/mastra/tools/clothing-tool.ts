import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const clothingTool = createTool({
  id: "get-clothing-advice",
  description: "Get clothing advice based on weather conditions",
  inputSchema: z.object({
    location: z.string().describe("City name"),
  }),
  outputSchema: z.object({
    clothingAdvice: z
      .string()
      .describe("Recomended clothing based on weather conditions"),
    location: z.string().describe("Location name"),
  }),
  execute: async ({ context }) => {
    return await getClothingAdvice(context.location);
  },
});
