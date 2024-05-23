import React, { useState } from 'react';

function Ex2() {
    const [results, setResults] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        const form = event.target;
        const data = new FormData(form);
        const first = data.get('first') * 1;
        const second = data.get('second') * 1;
        if (data.get('options') === 'option1') {
            setResults(first + second);
        } else if (data.get('options') === 'option2') {
            setResults(first - second);
        } else if (data.get('options') === 'option3') {
            setResults(first * second);
        } else if (data.get('options') === 'option4') {
            setResults(first / second);
        }
    };
    return (
        <div>
            <form
                className='form-inline'
                onSubmit={handleSubmit}
            >
                <div className='form-group'>
                    <label htmlFor='first'>First:</label>
                    <input
                        type='number'
                        name='first'
                        id='first'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='second'>Second:</label>
                    <input
                        type='number'
                        name='second'
                        id='second'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='operator'> Opetator </label>
                    <select
                        id='options'
                        name='options'
                    >
                        <option value='option1'>+</option>
                        <option value='option2'>-</option>
                        <option value='option3'>*</option>
                        <option value='option4'>/</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='second'>Results:</label>
                    <input
                        type='number'
                        name='second'
                        id='second'
                        value={results}
                    />
                </div>
                <button className='btn btn-secondary'>Computed</button>
            </form>
        </div>
    );
}

export default Ex2;
