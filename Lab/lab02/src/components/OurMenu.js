import React from 'react'
import Cart from './Cart';
import Cart1 from './../assets/img/cart1.png'
const dataMenu = [
    {
        id: 1,
        name: "Vesuvius",
        price: 79.99,
        status: "new",
        image: Cart1
    },
    {
        id: 2,
        name: "Hawaii",
        price: 79.99,
        status: "sale",
        oldPrice: 89.99,
        image: Cart1
    },
    {
        id: 3,
        name: "Parma",
        price: 89.99,
        status: "",
        image: Cart1
    },
    {
        id: 4,
        name: "Coca-cola, 33cl",
        price: 10.99,
        status: "new",
        image: Cart1
    },
    {
        id: 5,
        name: "Loka citron, 33cl",
        price: 10.99,
        status: "",
        image: Cart1
    },
    {
        id: 6,
        name: "Pizzasallad",
        price: 0.99,
        status: "new",
        image: Cart1
    },
    {
        id: 7,
        name: "Bröd och smör",
        price: 10.99,
        status: "sale",
        oldPrice: 15.99,
        image: Cart1
    },
    {
        id: 8,
        name: "Margherita",
        price: 79.99,
        status: "new",
        image: Cart1
    }
];

function OurMenu() {
    return (
        <section className='p-l-r-10 pd-t-5 '>
            <h1 >Our Menu</h1>
            <div className='row text-center'>
                {dataMenu.map((item) => {
                    if (item.status === "sale") {
                        return (
                            <Cart
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                status={item.status}
                                oldPrice={item.oldPrice}
                            />
                        )
                    } else {
                        return (
                            <Cart
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                status={item.status}
                            />
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default OurMenu
