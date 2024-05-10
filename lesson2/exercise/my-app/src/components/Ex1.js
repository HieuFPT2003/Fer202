function Ex1() {
    const people = [
        { name: 'Jack', age: 50 },
        { name: 'Michael', age: 9 },
        { name: 'John', age: 40 },
        { name: 'Ann', age: 19 },
        { name: 'Elisabeth', age: 16 }
    ]

    const req1 = people.find((person) => {
        if (person.age >= 10 && person.age <= 20) {
            return person;
        }
    })

    const req2 = people.filter(person => person.age >= 10).filter(person => person.age <= 20);


    const req3 = people.map(person => {
        if (person.age >= 10 && person.age <= 20) {
            return { ...person, teenager: true }
        }
        return { ...person, teenager: false }
    })

    const teenagers = req3.some(person => {
        return person.teenager === true
    })
    console.log(teenagers)
    return <>
        <h3>{`The first present (age >=10 and age <=20): ${req1.name}`}</h3>

        <div>
            <h3>People is Teenager:</h3>
            <ul>
                {req2.map((person, index) => {
                    return <li key={index}>{person.name}</li>
                })}
            </ul>
        </div>

        <div>
            <h3>Every people is teenager:{!teenagers ? 'True' : 'False'}</h3>
        </div>
        <div>
            <h3>Any people is teenager:{teenagers ? 'True' : 'False'}</h3>
        </div>
    </>
}

// •	Find the first person off the people array is teenager (age >=10 and age <=20)
// •	Find the all person of the people array is teenager (age >=10 and age <=20)
// •	Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
// •	Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.


export default Ex1