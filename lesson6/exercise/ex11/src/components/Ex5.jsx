import { useState } from 'react';

export default function Ex5() {
    const [color, setColor] = useState();
    let style = `bg-${color}-600 py-10 w-24`;
    return (
        <div className=''>
            <form>
                <select
                    name='color'
                    id='color'
                    onChange={(e) => {
                        // Handle the select change event here
                        if (e.target.value === 'none') {
                            setColor('');
                        }
                        setColor(e.target.value);
                        console.log(e.target.value);
                    }}
                >
                    <option
                        value='none'
                        checked
                    >
                        Select a color{' '}
                    </option>
                    <option value='red'>Red</option>
                    <option value='sky'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='yellow'>Yellow</option>
                </select>

                <div className={style}></div>
            </form>
        </div>
    );
}
