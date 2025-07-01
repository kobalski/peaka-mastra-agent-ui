"use client";

import { Thread, makeMarkdownText } from "@assistant-ui/react-ui";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  return (
    <>
      <Thread
        welcome={{
          message: "Ask me questions about Peaka Sample Data",
          suggestions: [
            {
              prompt: "List me top 10 opportunities from hubspot.",
              text: "List me top 10 opportunities from hubspot.",
            },
            {
              prompt: "List me top 10 actors from database.",
              text: "List me top 10 actors from database.",
            },
          ],
        }}
        assistantMessage={{ components: { Text: MarkdownText } }}
      />
    </>
  );
}
