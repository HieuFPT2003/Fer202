import React from 'react';

function Ex1() {
    const [count, setCount] = React.useState(0);
    const handleCount = () => {
        setCount((prev) => {
            return prev + 1;
        });
    };
    return (
        <div className='text-center text-white rounded-md'>
            <button
                className='mt-20 mb-10 px-2 py-2 border-1 border-sky-500'
                onClick={handleCount}
            >
                Increment
            </button>
            <h3>Count : {count}</h3>
        </div>
    );
}

export default Ex1;
