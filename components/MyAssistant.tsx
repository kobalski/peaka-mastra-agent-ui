"use client";

import { Thread, makeMarkdownText } from "@assistant-ui/react-ui";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  return (
    <Thread
      strings={{
        welcome: { message: "Ask me questions about Peaka Sample Data" },
      }}
      assistantMessage={{ components: { Text: MarkdownText } }}
    />
  );
}
