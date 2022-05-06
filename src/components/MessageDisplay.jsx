import react, { useState } from 'react';


const MessageDisplay = (props) => {
    return (
        <div>
            <h1>Current Message</h1>
            <p>{props.message}</p>
        </div>
    );
};

export default MessageDisplay;

