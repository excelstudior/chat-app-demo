const initialState = {
    messages: [],
    currentQuestion: null
};

const chatApp = (state=initialState, action) => {
    switch(action.type) {
        case 'NEXT_QUESTION': {
            let nextQuestion = action.payload;
            let messages = nextQuestion !== null
                ? [...state.messages, {text: nextQuestion.text, class: 'left'}]
                : [...state.messages, {text: 'Completed, Thank you!', class: 'left'}];
            return {...state, messages, currentQuestion: nextQuestion};
        }
        case 'ADD_ANSWER': {
            let answer = action.payload;
            let messages = [...state.messages, {text: answer.text, class: 'right'}];
            return {...state, messages}
        }
        default:
            return state;
    }
}

export default chatApp;