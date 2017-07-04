import MockApi from '../api/mockApi';

export const getNextQuestion = () => {
    return dispatch => {
        MockApi.getNextQuestion()
               .then(question => dispatch({type: 'NEXT_QUESTION',payload: question}));
    }
}

export const addAnswer = (questionId, text) => {
    let answer = {text: text};
    if(questionId === null) {
        return {type: 'ADD_ANSWER', payload: answer}
    }
    return dispatch => {
        dispatch({type: 'ADD_ANSWER', payload: answer});
        return MockApi.saveAnswer(questionId, text)
                      .then(()=> dispatch(getNextQuestion()));
    }
}
