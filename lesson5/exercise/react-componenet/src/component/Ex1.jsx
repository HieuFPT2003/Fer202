import { useState } from 'react';

function Ex1() {
    const [title, setTitle] = useState([]);
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleAddList = (text) => {
        if (text.trim()) {
            setTitle((prevTitle) => {
                return [...prevTitle, text];
            });
        }
        setText('');
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <form
                action=''
                onSubmit={handleSubmit}
                style={{ marginTop: '30px' }}
            >
                <input
                    type='text'
                    name='title'
                    id='title'
                    value={text}
                    onChange={(event) => {
                        handleChange(event);
                    }}
                />
                <button
                    type='submit'
                    onClick={() => handleAddList(text)}
                >
                    Add List
                </button>
            </form>
            <h1
                className=''
                style={{ marginTop: '30px' }}
            >
                List of Items
            </h1>

            <ul className='list-group'>
                {title.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className='list-group-item'
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Ex1;
