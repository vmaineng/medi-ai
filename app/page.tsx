"use client";

import { useState } from "react";
import { Navbar } from "./src/components/Navbar";
import { SuggestionsList } from "./src/components/SuggestionsList";
import { NotesInput } from "./src/components/NotesInput";
import { Suggestion } from "./src/types/suggestion";
import { Footer } from "./src/components/Footer";

export default function Home() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const handleSubmit = async (notes: string) => {
    setIsLoading(true);
    setHasSubmitted(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 to-blue-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-10">
          <h2 className="text-transparent bg-clip-text bg-linear-to-r  from-pink-500 via-purple-500 to-blue-500 mb-3">
            AI-Powered Medical Suggestions
          </h2>
          <p className="text-gray-600">
            Enter in comments to receive intelligent care recommendations
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <NotesInput onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
          <div>
            <SuggestionsList
              suggestions={suggestions}
              hasSubmitted={hasSubmitted}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
