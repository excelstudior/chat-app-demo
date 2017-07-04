import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Glyphicon} from 'react-bootstrap';
import * as actions from '../actions';
import './AddAnswer.css';

class AddAnswer extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick() {
        let text = this.refs.textInput.value;
        if(text === '') return;
        let questionId = this.props.currentQuestion !== null 
            ? this.props.currentQuestion.id
            : null;
        this.props.addAnswer(questionId, text);
        this.refs.textInput.value = '';
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div className="flex-box">
                <input type="text" 
                       ref="textInput" 
                       className="text-box"
                       onKeyPress={this.handleKeyPress}>
                </input>
                <button className="button" 
                        onClick={this.handleClick} 
                        >
                    <Glyphicon glyph="glyphicon glyphicon-send" />
                </button>
            </div>
        )
    }
}

AddAnswer.propTypes = {
    currentQuestion: PropTypes.object,
    addAnswer: PropTypes.func
};

function mapStateToProps(state){
    return {
        currentQuestion: state.currentQuestion
    };
}

export default connect(mapStateToProps, actions)(AddAnswer);