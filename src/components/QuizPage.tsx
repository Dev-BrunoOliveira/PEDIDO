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
      options: [" Hambúrguer ", " Lasanha ", " Pizza ", " Sushi "],
      correctAnswer: "Pizza",
    },
    {
      id: 2,
      question: "Onde foi o nosso primeiríssimo encontro?",
      options: [
        " No Parque ",
        " No Cinema ",
        " Na Liberdade ",
        " Em uma Hamburgueria ",
      ],
      correctAnswer: "Na Liberdade",
    },
    {
      id: 3,
      question: "Se eu pudesse escolher qualquer superpoder, qual seria?",
      options: [
        " Voa r",
        " Teletransporte ",
        " Ler mentes ",
        " Invisibilidade ",
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
    <div className="w-full max-w-md bg-[#F4F8FC] border-2 border-[#A4CEFF] p-5 rounded shadow-md">
      <div className="bg-[#A4CEFF] text-[#003399] font-black p-2 mb-4 text-center border border-[#5B88C4] rounded-sm uppercase text-xs tracking-wider">
        ❓ Teste de Afinidade da Comunidade ❓
      </div>

      {!quizFinished ? (
        <div>
          <div className="mb-2 text-xs text-gray-500 font-mono text-right">
            Pergunta {currentQuestionIndex + 1} de {questions.length}
          </div>

          <h3 className="text-base font-bold text-[#4A3728] mb-4 bg-white p-3 border border-[#D4E2F4] rounded">
            {questions[currentQuestionIndex].question}
          </h3>

          <div className="flex flex-col gap-2 mb-6">
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(option)}
                className={`w-full text-left p-3 rounded border text-sm transition-all ${
                  selectedOption === option
                    ? "bg-[#FF6600] text-white border-[#CC5200] font-bold shadow-inner"
                    : "bg-white text-gray-700 border-[#CCD9E8] hover:bg-[#EBF2FA]"
                }`}
              >
                <span className="inline-block bg-gray-100 text-gray-600 rounded-full px-1.5 py-0.5 text-xs mr-2 font-mono border">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full py-2 rounded font-bold text-sm tracking-wide border-b-2 transition-all ${
              selectedOption
                ? "bg-[#003399] text-white border-[#002266] active:scale-98"
                : "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
            }`}
          >
            {currentQuestionIndex + 1 === questions.length
              ? "Finalizar Quiz"
              : "Responder e Próxima →"}
          </button>
        </div>
      ) : (
        <div className="text-center p-4 bg-white border border-[#D4E2F4] rounded">
          <h3 className="text-xl font-black text-[#003399] mb-2">
            Fim do Quiz!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Veja quanta sorte eu tenho de ter você:
          </p>

          <div className="inline-block bg-[#E5EDF5] text-[#E65C00] text-3xl font-black px-6 py-3 rounded-full border-2 border-[#80A9D9] mb-6 font-mono">
            {score} / {questions.length}
          </div>

          <p className="text-xs text-gray-500 italic mb-4">
            {score === questions.length
              ? "Você me conhece perfeitamente! Te amo mais que tudo! 💜"
              : "Quase 100%! Acho que precisamos marcar mais encontros para conversar... 😉"}
          </p>

          <button
            onClick={onReset}
            className="text-xs text-[#003399] underline hover:text-[#FF6600]"
          >
            ← Voltar para o início
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
