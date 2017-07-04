import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import './Messages.css';

class Messages extends Component {
    scrollToBottom() {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        // inital loading
        this.props.getNextQuestion();
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="scroll" id="scroll">
                <div className="message-board">
                    {
                        this.props.messages.map(
                            (m, key) => 
                                <div className={m.class} key={key}>
                                    <img className="avatar" src="" alt=""/>
                                    <span className="messsage">{m.text}</span>
                                </div>
                        )
                    }
                </div>
                <div ref={(el) => { this.messagesEnd = el; }} />
            </div>
        )
    }
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
    getNextQuestion: PropTypes.func.isRequired
};

function mapStateToProp(state) {
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProp, actions)(Messages);