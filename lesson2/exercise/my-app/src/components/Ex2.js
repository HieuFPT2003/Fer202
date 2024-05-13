import React from 'react'

function Ex2() {
    const array = [1, 2, 3, 4];
    const sum = array.reduce((total, current) => {
        return total + current
    }, array[0])

    const product = array.reduce((total, current) => {
        return total * current
    }, array[0])
    return (
        <div>
            <h3>Sum of array: {sum}</h3>
            <h3>Product of array: {product}</h3>
        </div>
    )
}

export default Ex2


// •	Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right), thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.
// •	Implementation of very simple functions (like the aforementioned sum or product) requires writing a lot of boilerplate. Is there any remedy for that? just try arrow functions!
