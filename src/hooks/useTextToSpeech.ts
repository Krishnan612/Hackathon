import { useRef } from "react";

export function useTextToSpeech() {
  const synthRef = useRef(window.speechSynthesis);

  const speak = (text: string) => {
    if (!synthRef.current) return;
    const utterance = new SpeechSynthesisUtterance(text);
    // Optional: set language, pitch, rate, etc.
    // utterance.lang = "en-US";
    synthRef.current.cancel(); // Stop any current speech
    synthRef.current.speak(utterance);
  };

  return { speak };
}
