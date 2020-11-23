import React from 'react';
import ReactDOM from 'react-dom';
import {Greetings} from './components/Greeting.jsx';

const HelloComponent = () => {
    return (
    <div>
    <Greetings />        
    <h2>The React Component</h2>
    </div>
    );
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'));