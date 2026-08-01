import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Placeholder: will send a prompt to OpenAI with graph context.
  return NextResponse.json({
    answer: `You asked: "${prompt}". Once OpenAI is connected, I will answer with cited nodes and suggested next actions.`,
    citations: [],
  });
}
