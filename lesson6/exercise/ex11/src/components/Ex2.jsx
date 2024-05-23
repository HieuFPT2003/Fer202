import React from 'react';

function Ex2() {
    const [text, setText] = React.useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <input
                type='text'
                value={text}
                onChange={(event) => {
                    handleChange(event);
                }}
            />

            <h3>Input text: {text}</h3>
        </div>
    );
}

export default Ex2;
