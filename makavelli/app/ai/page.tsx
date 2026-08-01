"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const suggestions = [
  "Who should I contact next?",
  "Which ministries need dashboards?",
  "Summarize my relationship with the Ministry for Grand Bahama.",
  "Generate a follow-up email.",
];

export default function AIPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "I'm connected to your graph. Once you add real data and connect an OpenAI key, I can answer with cited nodes, suggest next actions, and generate agendas.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-10rem)] flex-col">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">AI Assistant</h1>

      <div className="mt-6 flex-1 space-y-4 overflow-y-auto rounded-2xl border border-border bg-surface p-5">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
              m.role === "user"
                ? "ml-auto bg-accent text-accent-foreground"
                : "bg-surface-elevated text-foreground"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask anything about your network..."
          className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          onClick={handleSend}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
