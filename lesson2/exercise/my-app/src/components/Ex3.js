import React from 'react'

function Ex3() {

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

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    const person = {
        name: "Costas",
        address: {
            street: "Lalaland 12"
        }
    };

    const staredAfter1987 = companies.filter(comp => {
        return comp.start >= 1987
    })

    const retailCompanies = companies.filter(comp => comp.category === 'Retail')
    console.log(retailCompanies)
    // Create a table
    const table = document.createElement('table');
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Category', 'Start', 'End'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    retailCompanies.forEach(company => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = company.name;
        row.appendChild(nameCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = company.category;
        row.appendChild(categoryCell);

        const startCell = document.createElement('td');
        startCell.textContent = company.start;
        row.appendChild(startCell);

        const endCell = document.createElement('td');
        endCell.textContent = company.end;
        row.appendChild(endCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append the table to the body
    document.body.appendChild(table);

    // Add some basic styles to the table
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.querySelectorAll('th, td').forEach(cell => {
        cell.style.border = '1px solid black';
        cell.style.padding = '8px';
        cell.style.textAlign = 'left';
    });


    //Sort
    let companiesSortAsc = [...companies];
    companiesSortAsc = companiesSortAsc.sort((a, b) => a.end - b.end);

    return (
        <div>
            <h3>Name of all Company</h3>
            <ul>
                {
                    companies.map((comp, index) => {
                        return <li key={index}>{comp.name}</li>
                    })
                }
            </ul>
            <h3>All company stared after 1987:
            </h3>
            <ul>
                {
                    staredAfter1987.map((comp, index) => {
                        return <li key={index}>{comp.name}</li>
                    })
                }
            </ul>

            <h3>Sort the companies based on their end date in ascending order</h3>
            <ul>
                {companiesSortAsc.map((company, index) => {
                    return <li key={index}>{company.name}</li>
                })}
            </ul>

            <h3 id='retail'>Company have category: Retail</h3>

        </div>



    )
}

export default Ex3