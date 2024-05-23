import { useEffect, useState } from 'react';

function Ex2() {
    // Initial
    const [count, setCount] = useState(10);

    // First time mount useEffect
    useEffect(() => {
        // Not run
        if (count <= 0) {
            // useEffect will unmount
            return;
        }

        // initial remaining
        const remaining = setInterval(() => {
            setCount((prev) => {
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(remaining);
        };
    }, [count]);

    // render
    return <div>Time Remaining : {count}</div>;
}

export default Ex2;
