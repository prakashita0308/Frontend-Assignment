export type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};
const questions: Question[] = [
  { question: "1. What sound does a cat make?", options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], correctIndex: 1 },
  { question: "2. What would you probably find in your fridge?", options: ["Ice Cream", "Books", "Cactus"], correctIndex: 0 },
  { question: "3. How many stars are in the sky?", options: ["Infinite", "One Hundred", "Zero"], correctIndex: 0 }
];
export default questions;
