import React from 'react'

function Exercise3() {
    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];


    // •	Sort the ages array in descending order
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32].sort((a, b) => b - a)

    // •	Print the sum if you add all the ages using reduce
    const sum = ages.reduce((current, total) => current + total, 0)

    // •	Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS
    const newObject = {
        ...companies[0],
        print() {
            console.log(this.name)
        }
    }

    // •	Create a function that takes an unknown number of arguments that are numbers and return their sum;
    function sumNumbers(...numbers) {
        return numbers.reduce((total, current) => total + current, 0);
    }
    //•	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, it should add its values to the array that will be returned by the function
    function newArray(...props) {
        let array = [];
        props.forEach(prop => {
            if (Array.isArray(prop)) {
                array.push(...prop);
            } else {
                array.push(prop);
            }
        });
        return array;
    }

    console.log(newArray(1, 3, [1, 2]));
    console.log(typeof [12]);
    return (
        <div>
            <div>
                Sort the ages array in descending order
                <ul>
                    {ages.map((age, index) => {
                        return <li key={index}>{age}</li>
                    })}
                </ul>
            </div>
            <div>
                Sum of ages:{sum}
            </div>
            {newObject.print()}
            <div>

            </div>
        </div>
    )
}

export default Exercise3





