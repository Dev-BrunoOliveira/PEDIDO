import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizPageProps {
  onReset: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ onReset }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é a minha comida favorita no mundo inteiro?",
      options: ["Hambúrguer", "Lasanha", "Pizza", "Sushi"],
      correctAnswer: "Pizza",
    },
    {
      id: 2,
      question: "Onde foi o nosso primeiríssimo encontro?",
      options: [
        "No Parque",
        "No Cinema",
        "Na Liberdade",
        "Em uma Hamburgueria",
      ],
      correctAnswer: "Na Liberdade",
    },
    {
      id: 3,
      question: "Se eu pudesse escolher qualquer superpoder, qual seria?",
      options: [
        "Voar",
        "Teletransporte",
        "Ler mentes",
        "Invisibilidade",
      ],
      correctAnswer: "Teletransporte",
    },
  ];

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        ❓ Teste de Afinidade da Comunidade ❓
      </div>

      {!quizFinished ? (
        <div className="quiz-content">
          <div className="quiz-progress">
            Pergunta {currentQuestionIndex + 1} de {questions.length}
          </div>

          <h3 className="quiz-question">
            {questions[currentQuestionIndex].question}
          </h3>

          <div className="quiz-options">
  {questions[currentQuestionIndex].options.map((option, idx) => (
    <button
      key={idx}
      onClick={() => setSelectedOption(option)}
      className={`quiz-option ${
        selectedOption === option
          ? "quiz-option-selected"
          : "quiz-option-default"
      }`}
    >
      <span className="quiz-option-letter">
        {String.fromCharCode(65 + idx)}
      </span>

      <span className="quiz-option-text">
        {option}
      </span>
    </button>
  ))}
</div>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`quiz-next-btn ${
              selectedOption
                ? "quiz-next-btn-enabled"
                : "quiz-next-btn-disabled"
            }`}
          >
            {currentQuestionIndex + 1 === questions.length
              ? "Finalizar Quiz"
              : "Responder e Próxima →"}
          </button>
        </div>
      ) : (
        <div className="quiz-result">
          <h3 className="quiz-result-title">
            Fim do Quiz!
          </h3>

          <p className="quiz-result-subtitle">
            Veja quanta sorte eu tenho de ter você:
          </p>

          <div className="quiz-score">
            {score} / {questions.length}
          </div>

          <p className="quiz-result-message">
            {score === questions.length
              ? "Você me conhece perfeitamente! Te amo mais que tudo! 🧡"
              : "Quase 100%! Acho que precisamos marcar mais encontros para conversar... 😉"}
          </p>

          <button
            onClick={onReset}
            className="quiz-back-btn"
          >
            ← Voltar para o início
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;