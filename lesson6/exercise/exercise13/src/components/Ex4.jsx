import { useEffect, useState } from 'react';

export default function Ex4() {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const validateName = (text) => {
            console.log(text);
            if (text.trim() === '') {
                setError(false);
            } else {
                setError(true);
            }
        };

        validateName(value);
    }, [value, error]);

    return (
        <div>
            <label htmlFor='name'> Name: </label>
            <input
                type='text'
                value={value}
                name='input'
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                className={`border-2 ${error && 'border-rose-500'}`}
            />
            {!error && (
                <p className='border-rose-500'>This field is required</p>
            )}
        </div>
    );
}
