'use client'

import { useEffect, useState } from "react";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [generatedWords, setGeneratedWords] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (generatedWords.length < words.length) {
      interval = setInterval(() => {
        setGeneratedWords(words.slice(0, generatedWords.length + 1));
      }, 30);
    }

    return () => clearInterval(interval);
  }, [generatedWords, words]);

  return (
    <div className="text-lg">
      {generatedWords}
      <span className="inline-block w-1 h-6 bg-primary ml-1 animate-blink"></span>
    </div>
  );
};