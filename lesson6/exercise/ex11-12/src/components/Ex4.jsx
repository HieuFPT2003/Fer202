import { useState } from 'react';
function Ex4() {
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);

    const handleAdd = (text) => {
        setTask((prev) => {
            return [...prev, text];
        });
        setText('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleDelete = (index) => {
        setTask((prev) => {
            return prev.filter((_, i) => i !== index);
        });
    };
    return (
        <div className='mt-40 flex flex-row'>
            <form
                onSubmit={handleSubmit}
                className='basis-8/12'
            >
                <input
                    type='text'
                    name='task'
                    id='task'
                    placeholder='Please input a Task'
                    value={text}
                    className='pl-4 pr-40 mr-8 rounded-sm'
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
                <button
                    type='submit'
                    onClick={() => {
                        handleAdd(text);
                    }}
                    className='px-5 bg-red-600 rounded-sm text-white'
                >
                    Add Todo
                </button>
            </form>

            <ul className='bg-white basis-4/12 p-4 text-center'>
                <h6 className='font-bold'>Todo List</h6>
                {task.map((title, index) => {
                    return (
                        <li
                            key={index}
                            className='py-2 px-2 bg-slate-500 flex justify-between rounded-md mb-2'
                            onClick={() => {
                                handleDelete(index);
                            }}
                        >
                            {title}
                            <span className='bg-red-600 px-2 py rounded-md text-white cursor-pointer'>
                                Delete
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Ex4;
