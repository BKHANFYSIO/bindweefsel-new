import React, { useState } from 'react';
import { MCQuestion } from '../data/content';

interface MCQuestionComponentProps {
  questions: MCQuestion[];
}

const MCQuestionComponent: React.FC<MCQuestionComponentProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Vraag {currentIndex + 1} van {questions.length}
          </h2>
          
          <p className="text-lg mb-6 text-gray-700">{currentQuestion.question}</p>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showExplanation && handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  showExplanation
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-100 border-2 border-green-500'
                      : selectedAnswer === index
                      ? 'bg-red-100 border-2 border-red-500'
                      : 'bg-gray-50'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold mb-2">
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}
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
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Volgende
        </button>
      </div>
    </div>
  );
};

export default MCQuestionComponent; 