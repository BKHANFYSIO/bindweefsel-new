import React, { useState } from 'react';
import { Flashcard } from '../data/content';

interface FlashcardComponentProps {
  flashcards: Flashcard[];
}

const FlashcardComponent: React.FC<FlashcardComponentProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div
          className={`relative h-64 cursor-pointer transform transition-transform duration-500 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6 flex items-center justify-center text-center">
            <p className="text-xl text-gray-800">{currentCard.question}</p>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-blue-50 rounded-lg shadow-lg p-6 flex items-center justify-center text-center rotate-y-180">
            <p className="text-xl text-gray-800 whitespace-pre-line">{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Vorige
        </button>
        <span className="px-4 py-2 text-gray-700">
          {currentIndex + 1} / {flashcards.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Volgende
        </button>
      </div>
    </div>
  );
};

export default FlashcardComponent; 