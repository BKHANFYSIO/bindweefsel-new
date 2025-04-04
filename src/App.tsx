import React, { useState } from 'react';
import { flashcards, mcQuestions } from './data/content';
import FlashcardComponent from './components/FlashcardComponent';
import MCQuestionComponent from './components/MCQuestionComponent';

function App() {
  const [currentMode, setCurrentMode] = useState<'flashcards' | 'mc'>('flashcards');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Bindweefselherstel - Leermodule
        </h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setCurrentMode('flashcards')}
            className={`px-6 py-2 rounded-lg ${
              currentMode === 'flashcards'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setCurrentMode('mc')}
            className={`px-6 py-2 rounded-lg ${
              currentMode === 'mc'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Meerkeuzevragen
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {currentMode === 'flashcards' ? (
            <FlashcardComponent flashcards={flashcards} />
          ) : (
            <MCQuestionComponent questions={mcQuestions} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 