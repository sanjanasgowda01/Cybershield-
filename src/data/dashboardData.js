export const answerScore = (answer) => answer === 'Yes' ? 1 : 0;
export const resultLabel = (score) => score >= 3 ? 'Strong foundations' : score >= 2 ? 'Room to improve' : 'Start with the basics';
