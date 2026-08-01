import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function askOpenAI(prompt: string, context?: string) {
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are a strategic assistant operating on a knowledge graph of people, organizations, government entities, research, projects, and opportunities. Answer concisely and cite relevant nodes when possible.",
    },
  ];

  if (context) {
    messages.push({ role: "system", content: `Context:\n${context}` });
  }

  messages.push({ role: "user", content: prompt });

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  return response.choices[0]?.message?.content ?? "No response.";
}
