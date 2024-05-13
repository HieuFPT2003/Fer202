import { useState } from 'react'

function Exer3() {
    const [count, setCount] = useState(0);
    // •	Destructuring the property street in a variable named street from the object person
    const person = {
        name: "Costas",
        address: {
            street: "Lalaland 12"
        },

    };
    const { address } = person;
    person.street = address.street;
    delete person.address;
    console.log(person);


    //•	Write a function that every time you call it, it returns a number that increments starting from 0
    const increateCall = () => {
        setCount(prev => count + 1)
    }

    const getQueryParams = () => {
        const url = window.location.href;
        const queryParams = new URLSearchParams(url.search);
        const params = {};
        for (const [key, value] of queryParams.entries()) {
            params[key] = value;
        }
        return params;
    };
    console.log(getQueryParams())
    return (
        <>
            <h3> The number of function calls</h3>
            <p>{count}</p>
            <button onClick={increateCall}>Call</button>
        </>

    )

}

export default Exer3