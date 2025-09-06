import { Question, Theme } from "@/types/game";

const questions: Question[] = [
  // Matemática
  {
    id: 1,
    theme: 'matemática',
    question: "Qual é o resultado de 15 + 23?",
    correctAnswer: "38",
    wrongAnswers: ["35", "40", "42"]
  },
  {
    id: 2,
    theme: 'matemática',
    question: "Quanto é 7 × 8?",
    correctAnswer: "56",
    wrongAnswers: ["54", "58", "48"]
  },
  {
    id: 3,
    theme: 'matemática',
    question: "Qual é a raiz quadrada de 64?",
    correctAnswer: "8",
    wrongAnswers: ["6", "10", "12"]
  },
  
  // História
  {
    id: 4,
    theme: 'história',
    question: "Em que ano o Brasil foi descoberto?",
    correctAnswer: "1500",
    wrongAnswers: ["1498", "1502", "1505"]
  },
  {
    id: 5,
    theme: 'história',
    question: "Quem foi o primeiro presidente do Brasil?",
    correctAnswer: "Deodoro da Fonseca",
    wrongAnswers: ["Getúlio Vargas", "Prudente de Morais", "Floriano Peixoto"]
  },
  {
    id: 6,
    theme: 'história',
    question: "Em que século aconteceu a Revolução Francesa?",
    correctAnswer: "XVIII",
    wrongAnswers: ["XVII", "XIX", "XVI"]
  },
  
  // Ciência
  {
    id: 7,
    theme: 'ciência',
    question: "Qual é o símbolo químico do ouro?",
    correctAnswer: "Au",
    wrongAnswers: ["Ag", "Al", "Ar"]
  },
  {
    id: 8,
    theme: 'ciência',
    question: "Quantos planetas tem o Sistema Solar?",
    correctAnswer: "8",
    wrongAnswers: ["9", "7", "10"]
  },
  {
    id: 9,
    theme: 'ciência',
    question: "Qual é a velocidade da luz no vácuo?",
    correctAnswer: "300.000 km/s",
    wrongAnswers: ["250.000 km/s", "350.000 km/s", "200.000 km/s"]
  },
  
  // Programação
  {
    id: 10,
    theme: 'programação',
    question: "O que significa HTML?",
    correctAnswer: "HyperText Markup Language",
    wrongAnswers: ["High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"]
  },
  {
    id: 11,
    theme: 'programação',
    question: "Qual linguagem é conhecida como a 'linguagem da web'?",
    correctAnswer: "JavaScript",
    wrongAnswers: ["Python", "Java", "C++"]
  },
  {
    id: 12,
    theme: 'programação',
    question: "O que é CSS?",
    correctAnswer: "Cascading Style Sheets",
    wrongAnswers: ["Computer Style System", "Creative Style Solution", "Code Style Standard"]
  }
];

export const getRandomQuestion = (theme: Theme): Question => {
  const themeQuestions = questions.filter(q => q.theme === theme);
  const randomIndex = Math.floor(Math.random() * themeQuestions.length);
  return themeQuestions[randomIndex];
};

export const getAllQuestionsByTheme = (theme: Theme): Question[] => {
  return questions.filter(q => q.theme === theme);
};