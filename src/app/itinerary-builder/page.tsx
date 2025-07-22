"use client";

import React, { useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";

const ItineraryBuilder = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);

  const samplePrompts = [
    "Plan a 5-day romantic getaway to Paris with a $2000 budget",
    "Create a family-friendly 7-day trip to Tokyo with kids aged 8 and 12",
    "Design a 3-day foodie adventure in Bangkok focusing on street food",
    "Plan a 10-day backpacking trip through Southeast Asia on a tight budget",
    "Create a luxury 4-day spa and wellness retreat in Bali",
    "Design a 6-day cultural immersion trip to Morocco including local experiences",
  ];

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setItinerary("Your AI-powered itinerary will appear here!");
      setLoading(false);
    }, 2000);
  };

  const handleSamplePromptClick = (samplePrompt: string) => {
    setPrompt(samplePrompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div className='max-w-4xl mx-auto py-10 px-4'>
      <DashboardHeader />

      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          AI Itinerary Builder
        </h1>
        <p className='text-lg text-gray-600'>
          Describe your perfect trip and let AI create a personalized itinerary
          for you
        </p>
      </div>

      <div className='mb-8'>
        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
          <label className='block text-lg font-semibold mb-4 text-gray-800'>
            Describe your ideal trip
          </label>
          <textarea
            className='w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none'
            placeholder="Tell me about your dream trip... Where do you want to go? How long? What interests you? What's your budget? Any special preferences?"
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPrompt(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) =>
              handleKeyDown(e)
            }
            rows={4}
          ></textarea>
          <Button
            onClick={handleSubmit}
            className='w-full mt-6 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100'
            disabled={loading || !prompt.trim()}
          >
            {loading ? (
              <div className='flex items-center justify-center gap-2'>
                <div className='animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent'></div>
                Creating Your Itinerary...
              </div>
            ) : (
              "✨ Generate My Itinerary"
            )}
          </Button>
          <p className='text-sm text-gray-500 mt-2 text-center'>
            Press Ctrl+Enter (Cmd+Enter on Mac) to generate quickly
          </p>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Need inspiration? Try these sample prompts
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {samplePrompts.map((samplePrompt, index) => (
            <button
              key={index}
              onClick={() => handleSamplePromptClick(samplePrompt)}
              className='text-left p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] group'
            >
              <div className='flex items-start gap-3'>
                <div className='text-blue-500 mt-1 group-hover:text-purple-500 transition-colors'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='text-gray-700 group-hover:text-gray-900 transition-colors'>
                  {samplePrompt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {itinerary && (
        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='text-3xl'>🗺️</div>
            <h2 className='text-2xl font-bold text-gray-800'>
              Your AI-Generated Itinerary
            </h2>
          </div>
          <div className='prose max-w-none'>
            <p className='text-gray-700 leading-relaxed'>{itinerary}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryBuilder;
