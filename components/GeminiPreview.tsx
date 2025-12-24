import React, { useState, useRef, useEffect } from "react";

// 1. Add Type Definitions for Puter and Speech Recognition
declare global {
  interface Window {
    puter: any;
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface Message {
  id: string;
  sender: "user" | "omni";
  type: "text" | "audio" | "video";
  content: string;
  revealedText?: string;
  videoUrl?: string;
  timestamp: Date;
}

const GeminiPreview: React.FC = () => {
  const [role, setRole] = useState("Director of Operations");
  const [context, setContext] = useState(
    "Quarterly Stakeholder Review - Scaling Strategy"
  );
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false); // New state for Mic
  const [videoStatus, setVideoStatus] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isProcessing, isListening]);

  // Browser Text-to-Speech Helper (AI Speaking to You)
  const playBrowserTTS = (text: string) => {
    if (!window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const preferredVoice =
      voices.find(
        (v) => v.name.includes("Google") || v.name.includes("Female")
      ) || voices[0];
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    synth.speak(utterance);
  };

  // Browser Speech-to-Text Helper (You Speaking to AI)
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Your browser does not support voice recognition. Please use Chrome or Edge."
      );
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      // Auto-send after recognizing voice
      setTimeout(() => generateOmniResponse(transcript), 500);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const generateOmniResponse = async (userText: string) => {
    if (!userText.trim()) return;

    setIsProcessing(true);

    // Add User Message
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      type: "text",
      content: userText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      if (!window.puter) {
        throw new Error("Puter.js is not loaded. Please check index.html");
      }

      const systemInstruction = `You are Omni, an autonomous AI presence assistant. Respond to the user in a high-level executive voice. 
      Your response should be concise, professional, and outcome-oriented. 
      Return ONLY a JSON object with a "text" field for the spoken response and "action" for a suggested background task. Do not wrap in markdown code blocks.`;

      const prompt = `
        ${systemInstruction}
        
        Conversation Context: ${context}
        User Role: ${role}
        User Message: ${userText}
        History: ${messages
          .slice(-5)
          .map((m) => `${m.sender}: ${m.content}`)
          .join("\n")}
      `;

      // Call Puter AI
      const response = await window.puter.ai.chat(prompt);

      // Parse JSON response
      const cleanJson = response.message.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      let result;
      try {
        result = JSON.parse(cleanJson);
      } catch (e) {
        result = {
          text: response.message.content,
          action: "Processing response...",
        };
      }

      const omniMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "omni",
        type: "audio",
        content: `Delegated Action: ${result.action}`,
        revealedText: result.text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, omniMsg]);
      playBrowserTTS(result.text);
    } catch (err) {
      console.error("Puter Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "omni",
          type: "text",
          content:
            "I'm having trouble connecting to the neural core. Please verify you are logged into Puter.com in another tab.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const generateVideoResponse = async (messageId: string, text: string) => {
    setVideoStatus("Omni is initializing the neural rendering engine...");
    try {
      setVideoStatus("Generating professional presence... (Approx 3s)");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      alert(
        "Video generation is currently optimized for the Google Veo model. Puter AI video support is coming soon."
      );
      setVideoStatus(null);
    } catch (err) {
      console.error(err);
      setVideoStatus(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto glass-panel rounded-3xl border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[750px]">
      {/* Settings / Context Sidebar */}
      <div className="w-full md:w-80 bg-slate-900/80 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase">
            Presence Settings
          </h3>
        </div>

        <div className="space-y-6 flex-grow">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Active Identity
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Current Context
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="w-full h-24 bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
            <p className="text-[10px] text-indigo-400 font-bold uppercase mb-1">
              Status
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Omnis is synced with Puter AI Core.
            </p>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-grow flex flex-col bg-slate-950/20 relative">
        <div className="p-4 border-b border-slate-800 bg-slate-900/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center font-bold text-white">
              O
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Omni Virtual Delegate
              </p>
              <p className="text-[10px] text-emerald-400 font-medium">
                Ready for Delegation (Puter Powered)
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {messages.length === 0 && !isProcessing && (
            <div className="h-full flex flex-col items-center justify-center opacity-30">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-sm text-center">
                Type or speak to simulate a conversation.
                <br />
                Omnis will respond with your digital voice.
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-slate-900 border border-slate-800 text-slate-200"
                }`}
              >
                {msg.sender === "omni" && (
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest px-2 py-0.5 bg-indigo-400/10 rounded">
                      Audio Presence
                    </span>
                  </div>
                )}

                {msg.type === "text" && (
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                )}

                {msg.type === "audio" && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() =>
                          msg.revealedText && playBrowserTTS(msg.revealedText)
                        }
                        className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <div className="flex-grow h-1.5 bg-slate-800 rounded-full overflow-hidden flex space-x-0.5 items-end px-1 py-0.5">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-grow bg-indigo-400 rounded-sm animate-pulse"
                            style={{
                              height: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    {msg.revealedText && (
                      <details className="mt-2">
                        <summary className="text-[10px] text-slate-500 cursor-pointer hover:text-slate-300 transition-colors uppercase font-bold tracking-widest outline-none">
                          Show Transcript
                        </summary>
                        <p className="mt-2 text-xs italic text-slate-400 border-l-2 border-slate-800 pl-3 leading-relaxed">
                          "{msg.revealedText}"
                        </p>
                      </details>
                    )}
                    <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                      <p className="text-[10px] text-slate-500 font-mono">
                        {msg.content}
                      </p>
                      <button
                        onClick={() =>
                          generateVideoResponse(msg.id, msg.revealedText || "")
                        }
                        className="text-[10px] text-indigo-400 font-bold uppercase hover:text-indigo-300 transition-colors"
                      >
                        Convert to Video
                      </button>
                    </div>
                  </div>
                )}
                {/* Video rendering logic */}
                {msg.type === "video" && (
                  <div className="space-y-3 w-full">
                    <video
                      src={msg.videoUrl}
                      controls
                      className="w-full rounded-lg border border-slate-800 aspect-video bg-black"
                    />
                    <p className="text-xs italic text-slate-400 leading-relaxed">
                      "{msg.revealedText}"
                    </p>
                  </div>
                )}

                <p className="text-[9px] text-slate-500 mt-2 text-right">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {/* Processing / Listening Indicators */}
          {(isProcessing || isListening) && (
            <div className="flex justify-start animate-pulse">
              <div
                className={`border rounded-2xl p-4 flex space-x-2 items-center ${
                  isListening
                    ? "bg-red-900/20 border-red-500/50"
                    : "bg-slate-900 border-slate-800"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                    isListening ? "bg-red-500" : "bg-indigo-500"
                  } [animation-delay:-0.3s]`}
                ></div>
                <div
                  className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                    isListening ? "bg-red-500" : "bg-indigo-500"
                  } [animation-delay:-0.15s]`}
                ></div>
                <div
                  className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                    isListening ? "bg-red-500" : "bg-indigo-500"
                  }`}
                ></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">
                  {isListening ? "Listening..." : "Omnis is thinking..."}
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Video Loading Overlay */}
        {videoStatus && (
          <div className="absolute inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h4 className="text-lg font-bold text-white mb-2">
              Neural Processing
            </h4>
            <p className="text-slate-400 text-sm max-w-xs">{videoStatus}</p>
          </div>
        )}

        {/* Input Area */}
        <div className="p-6 bg-slate-900/40 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) generateOmniResponse(input);
            }}
            className="relative flex items-center space-x-3"
          >
            {/* NEW: Microphone Button */}
            <button
              type="button"
              onClick={startListening}
              className={`p-3 rounded-full transition-all ${
                isListening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
              title="Speak to Omni"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening ? "Listening..." : "Reply as your digital self..."
              }
              className="flex-grow bg-slate-950 border border-slate-800 rounded-full px-6 py-4 text-sm text-slate-200 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isProcessing}
              className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all active:scale-95 disabled:opacity-50"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeminiPreview;
