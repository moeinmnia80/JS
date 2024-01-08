const formatData = (questionData) => {
  const result = questionData.map((item) => {
    const questionObject = { question: item.question };
    const answer = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answer.splice(correctAnswerIndex, 0, item.correct_answer);
    questionObject.answers = answer;
    questionObject.correctAnswerIndex = correctAnswerIndex;
    return questionObject;
  });
  return result;
};

export default formatData;
