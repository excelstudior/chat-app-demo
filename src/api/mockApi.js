let answerId = 1;
let questions = [
    {"id": 1, "text": "Question1"},
    {"id": 2, "text": "Question2"},
    {"id": 3, "text": "Question3"}
];
let answers = [];

class MockApi {
    static getNextQuestion() {
        let answeredQuestionIds = answers.map(a => a.questionId);
        let unansweredQuestions = questions.filter(q => answeredQuestionIds.indexOf(q.id) === -1);
        let question = unansweredQuestions.length > 0 ? unansweredQuestions[0] : null;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(question), 500);
        });
    }

    static saveAnswer(questionId, text) {
        let answer;
        if(answers.filter(a => a.questionId === questionId).length > 0)
            answer = answers.filter(a => a.questionId === questionId)[0];
        else {
            answer = {id: answerId++, questionId: questionId, text: text};
            answers.push(answer);
        }
        console.log(answers);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(answer), 500);
        });
    }
}

export default MockApi;