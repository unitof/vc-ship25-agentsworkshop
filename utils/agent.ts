import { generateText } from "ai";

export async function codingAgent(prompt: string) {
  const result = await generateText({
    model: "openai/gpt-4.1-mini",
    prompt,
    system:
      "You are a coding agent. You will be working with js/ts projects. Your responses must be concise.",
  });

  return { response: result.text };
}
